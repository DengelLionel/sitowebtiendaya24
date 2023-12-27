import React from 'react'
import Titulos from './Titulos'
import CardProjectExperienceDesktop from './CardProjectExperienceDesktop'
import { proyectExperience } from '../../user/User'
const ProyectosExperienceDesktop = () => {
  return (
    <div className='hidden md:flex md:pl-[25px]  md:w-full md:items-center md:justify-center md:h-full md:flex-col md:gap-[30px]  xl:w-auto '>
        <Titulos titulo="PROYECTOS Y EXPERIENCIAS"/>
        <section className='hidden md:flex md:flex-wrap  md:gap-[30px] xl:items-center xl:w-auto '>
        {proyectExperience?.map((proyect:any,index:any)=>(
              <CardProjectExperienceDesktop 
              key={index} 
              id={proyect.id}
              titulo={proyect.titulo}
              imagen={proyect.imagen}
              />
        ))}
      
     
        </section>
        
    </div>
  )
}

export default ProyectosExperienceDesktop