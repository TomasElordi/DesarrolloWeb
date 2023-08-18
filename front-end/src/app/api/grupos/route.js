export async function GET(){
    const res = await fetch(process.env.URL + "/grupos", {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET'
  })
  const data = await res.json()
  return new Response(JSON.stringify(data))
}