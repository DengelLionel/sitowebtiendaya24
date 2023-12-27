import React, { useState } from 'react'
import IconPhp from '../Icons/IconPhp'
import Circle from './Circle'
import {skills} from '../../user/User'
import { useContext,useEffect,memo } from 'react'
import { SiteContextVal } from '../../context/SiteContext'
const Habilidades = () => {
 
  const {idHabilidad,setIdHabilidad}=useContext(SiteContextVal)
  const [theSkill,setTheSkill]=useState<any|undefined>(null)
  const [verficandoStart,setVerificandoStart]=useState<boolean|undefined>(false)
 let interval:any
useEffect(()=>{
  interval = setInterval(() => {
  skills.filter((skill:any)=>{
      if(skill.id===idHabilidad){
       return skill.state=true
      }else{
        return skill.state=false
      }})
      setVerificandoStart(skills.some((skill:any)=>skill.state===true))
    setTheSkill(skills.filter((skil:any)=>skil.state===true)) 
   
  }, 0.001);

  return () => clearInterval(interval);
},[idHabilidad,skills,verficandoStart,interval])

  return (
    <section id='mishabilidades' className='flex flex-col gap-[35px] md:flex-row md:p-[20px]'>
   <section className='flex flex-wrap items-center justify-center gap-[12px] md:gap-[20px] md:h-[200px]'>
    {skills?.map((skill:any,index:any)=>(
        <Circle open={()=>setIdHabilidad(skill.id)} id={skill.id} key={index} icon={skill.component}/>
      )
    )}
   
   
   </section>
   <article className='w-full md:h-[297px] md:w-[297px] lg:w-[402px] lg:h-[202px] h-auto transition-all duration-500  bg-gradient-to-b from-orange-400 to-rose-400 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] mb-[35px] pt-[28px] pl-[20px] pb-[28px] pr-[20px] flex flex-col items-center justify-center gap-[11px] text-azul3 '> 
    {verficandoStart===false?(<p className='font-roboto md:h-[297px] md:w-[297px] lg:w-[402px] lg:h-[202px] md:flex md:items-center font-bold text-[26px] text-center  tracking-[0.015em]'>Haga clic en cualquier icono de habilidades</p>):
    (<article className='flex flex-col  md:w-[297px] md:h-[297px] lg:h-[202px] lg:w-[402px] items-center justify-center gap-[11px] font-roboto font-normal text-[16px] text-center leading-[19px] tracking-[0.015em] transition-all duration-500'><p>{theSkill[0].descripcion}</p><Circle icon={theSkill[0].component}/></article>)}
    
    
   </article>
   </section>
  )
}

export default memo(Habilidades)