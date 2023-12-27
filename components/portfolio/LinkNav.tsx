import Link from "next/link"
import { useEffect } from "react"
interface link{
    Icon?:any,
    text:string,
    href:any
  }
 
const LinkNav = ({Icon,text,href}:link) => {
  const Scroll=(elemento:any)=>{
    const destino=document.querySelector(elemento)
    destino.scrollIntoView({
      behavior:'smooth'
    })
  }
  useEffect(()=>{


  },[])
  
  return (
    <article className="text-white2 flex items-center w-auto gap-[20px] cursor-pointer" onClick={()=>Scroll(href)}>
      {Icon}
      {text}
    </article>
  )
}

export default LinkNav