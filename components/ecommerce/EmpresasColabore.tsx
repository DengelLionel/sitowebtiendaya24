import React from 'react'
import ImagenEmpresas from './ImagenEmpresas'
import { empresasColabore } from '../../user/User'

const EmpresasColabore = () => {
  return (
         <section className='flex-wrap gap-[15px] xl:gap-[23px] justify-center items-center'>
          {empresasColabore?.map((empresa:any,index:any)=>(      
              <ImagenEmpresas 
               key={index}
               link={empresa.link}
              imagen={empresa.imagen}
              titulo={empresa.titulo}
              /> 
          ))}
         </section>
       
  )
}

export default EmpresasColabore