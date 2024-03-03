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
    <Link href={link}>
    <Image className='w-auto  h-auto xl:scale-90 transition-all duration-[500ms] xl:hover:scale-100 shadow-shadow1 grayscale hover:grayscale-0' width={300} height={200} alt={titulo} src={imagen}/>

    </Link>
  )
}

export default ImagenEmpresas