'use client'
import { useEffect, useState } from "react"
export default function Home() {
  const [grupos,setGrupos] = useState(null)
  useEffect(()=>{
    fetch('/api/grupos',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((data)=>setGrupos(data))
  },[])
  return (
    <main className="">

    </main>

  )
}
