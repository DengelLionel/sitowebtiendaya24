import React from 'react'
import Image from "next/image"
import Link from "next/link"
interface image{
    imagen:string,
    link:string,
    titulo:string
}
const ImagenEmpresas = ({imagen,titulo,link}:image) => {
  return (
    <Link  className='w-[300px]  h-auto ' href={link}>
    <Image className='w-[300px]  h-auto xl:scale-90 transition-all duration-[500ms] xl:hover:scale-100 grayscale hover:grayscale-0' width={300} height={240} alt={titulo} src={imagen}/>

    </Link>
  )
}

export default ImagenEmpresas