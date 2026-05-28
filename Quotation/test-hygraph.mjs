import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function test() {
  const endpoint = process.env.HYGRAPH_ENDPOINT
  const token = process.env.HYGRAPH_TOKEN

  if (!endpoint || !token) {
    console.error('Missing env vars')
    return
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `
        mutation {
          createTestimonial(data: {authorName: "Test", quote: "Test"}) {
            id
          }
        }
      `
    })
  })

  const json = await res.json()
  console.log(JSON.stringify(json, null, 2))
}

test()
