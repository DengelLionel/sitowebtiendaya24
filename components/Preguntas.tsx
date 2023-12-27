import {useState} from 'react'
import styles from '../styles/Preguntas.module.css'
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
import { Question } from 'componentes-dengel'
const questions=[
  { id:1,
     question:"¿Por qué Escoger Trabajar Conmigo?", 
     state:false, 
     answer:"Te ofrezco un enfoque amigable y colaborativo en el desarrollo de soluciones digitales y páginas informativas. Mi experiencia y habilidades aseguran un resultado de calidad que superará tus expectativas. ¡Trabajemos juntos para alcanzar el éxito en tus proyectos!" },
      { id:2,
         question:"¿Qué tipo de servicios de desarrollo web ofreces?",
          state:false,
           answer:"Ofrezco una amplia gama de servicios de desarrollo web, incluyendo diseño y desarrollo de sitios web personalizados, comercio electrónico, optimización de motores de búsqueda (SEO), integración de redes sociales, y soluciones de hosting y mantenimiento. Estamos comprometidos a brindar soluciones de desarrollo web de alta calidad a clientes de diferentes tamaños y industrias. Nos esforzamos por crear sitios web atractivos, fáciles de usar y efectivos que contribuyan al éxito de su negocio en línea. Ya sea que necesite una página web sencilla o una tienda en línea avanzada, estamos aquí para ayudarlo a alcanzar sus objetivos en línea." },
        { id:3,
        question:" ¿Ofrece servicios de mantenimiento y soporte después de la finalización del proyecto?",
        state:false,
         answer:"Sí, ofrecemos servicios de mantenimiento y soporte después de la finalización del proyecto para asegurarnos de que su sitio web siga funcionando sin problemas. Nuestro equipo de soporte está disponible para ayudarlo con cualquier problema técnico o de actualización que pueda surgir. Además, ofrecemos paquetes de mantenimiento y soporte opcionales para que pueda elegir el nivel de soporte que mejor se adapte a sus necesidades. Así, puede estar seguro de que su sitio web estará en buenas manos a largo plazo." } ] 
const Preguntas = () => {
  const [idd,setIdd]=useState<any|undefined>({id:0,state:false});
  return (
    <ContainerGeneral>
        <Titulo titulo='¿Qué más debo saber?'/>
        
        <section className='font-roboto not-italic font-medium text-[20px] leading-[26px] tracking-[0.015em] text-white2 sm:p-[24px] md:text-[24px] md:leading-[35px] lg:pl-[60px] lg:pr-[60px] lg:pt-[30px] lg:pb-[30px] lg:text-[26px] lg:leading-[35px] lg:w-[901px]'>
        <Question colorTextAnswer="text-azulpalido2" colorIconActive="#F5BB19" colorIconDefault="#BFBBD6" colorTextoActive="text-yellow2" colorTextoDefault="text-white4" questions={questions} idd={idd} setIdd={setIdd} />
        </section>
      
    </ContainerGeneral>
  )
}

export default Preguntas