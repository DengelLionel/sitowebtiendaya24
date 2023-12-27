import React from 'react'
import Image from 'next/legacy/image'
import IconGithub from '../Icons/IconGithub'
import IconGlobal from '../Icons/IconGlobal'
import Link from 'next/dist/client/link'
interface Proyect{
    id:number|undefined,
    titulo:string|undefined,
    imagen:string,
    descripcion?:string|undefined,
    github:string,
    sitioweb:string,
    video:string|undefined,
    imagenesPresentacion?:any|undefined
  
  }
const MostrandoProyecto = ({id,titulo,imagen,descripcion,github,sitioweb,video,imagenesPresentacion}:Proyect) => {
  return (
    <div className='h-full'>
      <h2 className='font-rowdies font-light md:text-[36px] text-center  text-white2'>{titulo}</h2>
      <section className='flex items-center justify-center p-[20px] flex-col gap-[50px]'>

     
      <section className='flex flex-row justify-center items-center gap-[26px]'>
       <article className='md:w-[306px] flex flex-col gap-[20px] md:h-[206px] font-roboto font-normal text-[20px] text-white2 tracking-[0.015em]'>
       <p>{descripcion}</p>
       <article className='flex flex-col  gap-[20px]'>
        <Link className='w-auto h-auto text-[16px] flex items-center gap-[10px]'  href={github?github:""} target="_blank"><IconGithub fill='#E6E6E6'/> Repositorio del proyecto</Link>
        <Link className='w-auto h-auto text-[16px] flex items-center gap-[10px]' href={sitioweb?sitioweb:""} target="_blank"><IconGlobal/>Sitio web del proyecto</Link>
       </article>
       </article>
        
        <article className='relative md:w-[300px] md:h-[250px]'>
        <Image className='rounded-br-[125px]' layout='fill' src={imagen} alt={titulo}/>
        </article>
      </section>

     
      <iframe  className=' md:w-[627px] rounded-[20px] md:h-[324px] ' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <section className='flex flex-col gap-[33px]'>
        <section className='flex flex-row gap-[22px] items-center justify-center'>
        <article className='md:w-[168px] md:h-[324px] md:rounded-[20px] bg-purple-400'></article>
        <article className='md:w-[255px] md:h-[255px] md:rounded-[20px] bg-purple-400'></article>
        </section>
        <section className='md:w-[609px] md:h-[325px] md:rounded-[20px] bg-purple-400'>

        </section>
      </section>
      </section>
   
        
    </div>
  )
}

export default MostrandoProyecto