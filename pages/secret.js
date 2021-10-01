import { useState, useEffect } from "react"
import { useSession } from "next-auth/client"

export default function Secret() {
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch("/api/secret")
      const json = await res.json()
      if(json.content){
        setContent(json.content)
      } else {}
      fetchData()
    }
  }, [session])
  if(typeof window !== "undefined" && loading) return null;

  if(!session){
    return (
      <main>
        <div>
          <h1>You are not signed in, please sign in first</h1>
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <div>
          <h1>Secret content of the page</h1>
        </div>
      </main>
    )
  }
}