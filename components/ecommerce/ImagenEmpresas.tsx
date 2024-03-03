import React from 'react'
import Image from "next/legacy/image"
import Link from "next/link"
interface image{
    imagen:string,
    link:string,
    titulo:string
}
const ImagenEmpresas = ({imagen,titulo,link}:image) => {
  return (
    <Link href={link}>
    <div className='relative w-[165px] h-[151px] sm:w-[300px] sm:h-[201px] lg:w-[390px] lg:w-[300px] xl:scale-90 transition-all duration-[500ms] xl:hover:scale-100 shadow-shadow1 grayscale hover:grayscale-0'>
    <Image className='rounded-[10px]' layout='fill'  objectFit="cover" alt={titulo} src={imagen}/>
    </div>
    </Link>
  )
}

export default ImagenEmpresas