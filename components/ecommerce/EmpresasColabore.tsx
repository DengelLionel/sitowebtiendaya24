import React from 'react'
import ImagenEmpresas from './ImagenEmpresas'
import { empresasColabore } from '../../user/User'
import { Marquee } from '@devnomic/marquee'
import "@devnomic/marquee/dist/index.css";
const EmpresasColabore = () => {
  return (
    <Marquee className="gap-[3rem] duration-[5s]"  fade={true}>
          {empresasColabore?.map((empresa:any,index:any)=>(      
              <ImagenEmpresas 
               key={index}
               link={empresa.link}
              imagen={empresa.imagen}
              titulo={empresa.titulo}
              /> 
          ))}
        </Marquee>
       
  )
}

export default EmpresasColabore