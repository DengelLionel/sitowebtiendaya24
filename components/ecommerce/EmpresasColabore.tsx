import React from 'react'
import ImagenEmpresas from './ImagenEmpresas'
import { empresasColabore } from '../../user/User'

const EmpresasColabore = () => {
  return (
    <div className='flex justify-center items-center w-full'>
         <section className='grid grid-cols-[repeat(2,auto)] gap-[11px] xl:grid-cols-[repeat(3,auto)] xl:gap-[23px]'>
          {empresasColabore?.map((empresa:any,index:any)=>(      
              <ImagenEmpresas 
               key={index}
               link={empresa.link}
              imagen={empresa.imagen}
              titulo={empresa.titulo}
              /> 
          ))}
         </section>
       
    </div>
  )
}

export default EmpresasColabore