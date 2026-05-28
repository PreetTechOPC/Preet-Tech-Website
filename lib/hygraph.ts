import fs from 'fs'
import path from 'path'

export async function hygraphRequest(query: string, variables: any = {}) {
  let endpoint = process.env.HYGRAPH_ENDPOINT
  let token = process.env.HYGRAPH_TOKEN

  // In development, dynamically read .env.local to avoid cache/restart issues
  if (process.env.NODE_ENV === 'development' || !endpoint || !token) {
    try {
      const envPath = path.resolve(process.cwd(), '.env.local')
      if (fs.existsSync(envPath)) {
        const envStr = fs.readFileSync(envPath, 'utf-8')
        const envLines = envStr.split('\n')
        for (const line of envLines) {
          const trimmed = line.trim()
          if (trimmed.startsWith('HYGRAPH_ENDPOINT=')) {
            endpoint = trimmed.split('=')[1].trim()
          }
          if (trimmed.startsWith('HYGRAPH_TOKEN=')) {
            token = trimmed.split('=').slice(1).join('=').trim()
          }
        }
      }
    } catch (e) {
      console.warn("Could not read .env.local dynamically", e)
    }
  }

  if (!endpoint || !token) {
    throw new Error('Hygraph endpoint or token is missing from environment variables.')
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error('GraphQL Error:', json.errors)
    const errorMsg = json.errors.map((e: any) => e.message).join(', ')
    throw new Error(errorMsg)
  }

  return json.data
}
