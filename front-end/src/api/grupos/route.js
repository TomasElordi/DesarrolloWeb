export async function GET(){
    const res = await fetch(process.env.URL + "/grupos", {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET'
  })
  const data = await res.json()
  console.log(data)
  return NextResponse.json({ data })
}