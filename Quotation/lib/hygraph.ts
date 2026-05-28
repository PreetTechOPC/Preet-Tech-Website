export async function hygraphRequest(query: string, variables: any = {}) {
  const endpoint = process.env.HYGRAPH_ENDPOINT
  const token = process.env.HYGRAPH_TOKEN

  if (!endpoint || !token) {
    throw new Error('Hygraph endpoint or token is missing from environment variables.')
  }

  const res = await fetch(endpoint, {
    method: 'POST',
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
