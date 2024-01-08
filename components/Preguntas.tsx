import {useState} from 'react'
import Link from 'next/link'
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
import Faq from './Faq'
import Image from 'next/image'
const questions=[
  { id:1,
     question:"¿Necesito tener habilidades técnicas para tener una tienda online?", 
     state:false, 
     answer:"No, en 'Crea Tienda Ya' manejamos todos los aspectos técnicos de la configuración y mantenimiento de tu tienda online. Tenemos planes para mantenimiento al mes y anual." },
      { id:2,
         question:"¿Qué plataformas de comercio electrónico utilizas para crear las tiendas online?",
          state:false,
           answer:"Nos especializamos en crear tiendas online en Shopify,solo en esta plataforma nos especializamos." },
        { id:3,
        question:" ¿Puedo personalizar mi tienda online a mi gusto?",
        state:false,
         answer:"Absolutamente, trabajamos contigo para asegurarnos de que tu tienda online refleje la personalidad de tu marca y satisfaga tus necesidades comerciales." } ] 
const Preguntas = () => {
  const [idd,setIdd]=useState<any|undefined>({id:0,state:false});
  return (
    <ContainerGeneral>
        <Titulo titulo='Preguntas frecuentes para tu tienda online shopify'/>
        <section className='flex flex-wrap items-center'>
         <Link href='https://www.tiktok.com/@creatiendaya/video/7285122790791957765?is_from_webapp=1&sender_device=pc&web_id=7262422594959181318'>
         <Image className='static top-0 max-h-[300px]' alt='Preguntas frecuentes de crea tienda ya' width={340} height={300} src={'https://res.cloudinary.com/dh9etf988/image/upload/v1697059311/creatiendaya/faqss_ggvif0.png'}/>
         </Link>
         
       
      
        <section className='font-montserrat not-italic font-normal text-[20px] leading-[26px] tracking-[0.012em] text-white2 sm:p-[24px] md:text-[20px] md:leading-[33px] lg:pl-[60px] lg:pr-[60px] lg:pt-[30px] lg:pb-[30px] lg:text-[20px] lg:leading-[33px] lg:w-[600px]'>
       
        <Faq faqs={questions} />
        </section>
        </section>
       
      {/*   colorTextAnswer="text-azulpalido2" colorIconActive="#F5BB19" colorIconDefault="#4B4A78" colorTextoActive="text-yellow2" colorTextoDefault="text-black3" questions={questions} idd={idd} setIdd={setIdd} */}
    </ContainerGeneral>
  )
}

export default Preguntas