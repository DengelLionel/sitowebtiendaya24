import React from 'react'
import Image from 'next/image'
import IconArrowDown from '../Icons/IconArrowDown'
import {useContext,useEffect} from "react"
import { SiteContextVal } from '../../context/SiteContext'
import { useCardProyectExperience } from '../../hooks/useCardProyectExperience'
import { proyectExperience } from '../../user/User'
import IconGithub from '../Icons/IconGithub'
import IconGlobal from '../Icons/IconGlobal'
import Link from 'next/link'
import VideoProject from './VideoProject'
interface card{
    image:string,
    id:any,
    alt:string,
    titulo:string,
    descripcion?:string,
    handle:any,
    video:string,
    github:string,
    sitioweb:string

}
const CardProjectExperienceMobile = ({image,alt,titulo,descripcion,id,handle,video,github,sitioweb}:card) => {
    const {idProyectExperience}=useContext(SiteContextVal)
    const {HandleId}=useCardProyectExperience(proyectExperience,idProyectExperience)
    useEffect(()=>{
        HandleId()
    })
  return (
  <section className={`rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] w-full  ${idProyectExperience.id===id.id && idProyectExperience.state===true?'h-auto':'h-[321px]'}  bg-primary mb-[38px] `}>
   
    <Image className={`rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] w-full h-[242px]`} width="328" height="242" sizes='100vw' alt={alt} src={image}/>

    
        <article onClick={handle} className='flex justify-between items-center pt-[25px] pl-[16px] pr-[16px] text-textPrimary font-roboto font-extrabold not-italic leading-[28px] tracking-[0.015em] text-[24px]'>
            <h3 >{titulo}</h3>
            <IconArrowDown id={id} />
        </article>
        <article className={`text-textPrimary text-[16px] p-[16px] font-roboto font-normal tracking-[0.015em] ${idProyectExperience.id===id.id && idProyectExperience.state===true?'h-auto opacity-100 visible':'h-0 invisible opacity-0 '}`}>
           
            {idProyectExperience.id===id.id && idProyectExperience.state!==false&&<section className='flex flex-col gap-[10px]'>
                <p>{descripcion}</p>
                <article className='flex flex-row gap-[10px] items-center w-full justify-center'>
                    <Link href={github} target="_blank"> <IconGithub fill='#E6E6E6'/> </Link>
                    <Link href={sitioweb} target="_blank"><IconGlobal/></Link>
               
                </article>
              <VideoProject video={video}/>
                
               
                </section>}
           
           
            </article>
   
  
  </section>
  )
}

export default CardProjectExperienceMobile