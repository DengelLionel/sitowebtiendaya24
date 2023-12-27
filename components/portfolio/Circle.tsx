import React from 'react'
import { useContext } from 'react'
import { SiteContextVal } from '../../context/SiteContext'
const Circle = ({icon,open,id}:any) => {
  const {idHabilidad,setIdHabilidad}=useContext(SiteContextVal)
  return (
    <article onClick={open} className={`rounded-full w-[62px] h-[62px] ${id===idHabilidad?'bg-yellow1':'bg-white2'}  flex items-center justify-center cursor-pointer transition-all duration-500`}>{icon}</article>
  )
}

export default Circle