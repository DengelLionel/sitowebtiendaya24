import IconEmail from "./Icons/IconEmail"

import IconWhatsapp from "./Icons/IconWhatsapp"
import IconTelegram from "./Icons/IconTelegram"
import IconInstagram from "./Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
import IconLogomas1024 from "./Icons/IconLogomas1024"
import IconLogo from "./Icons/IconLogo"
import Link from "next/link"
import { subLinks } from "../user/User"

const FooterContent = () => {
  return (
   <section className="flex flex-col justify-center items-center ">
 
   {/*  <h3 className='font-rowdies font-light text-[26px] leading-[40px] tracking-[0.015em] p-[16px] text-white2'>Contactame</h3> */}
    
    
    <section className="flex justify-center items-center  "> 
    <div  className="grid grid-cols-[repeat(2,auto)] gap-[35px] xl:gap-[126px]">
    <div className="flex flex-col gap-[30px]">
    <IconLogomas1024/>
    <section>
    <h3 className="font-rowdies font-light text-yellow1">Sigueme</h3>
<div className="flex flex-row gap-[20px] pt-[18px]">

{/*   <Link href="https://t.me/dengeldev"  aria-label="Redirecciona a telegram" target="_blank"><IconTelegram/></Link> */}
{/* <Link href="https://wa.me/+51977766744?text=Hola%20quiero%20más%20einformación" target="_blank"  aria-label="Redirecciona a whatsapp"> <IconWhatsapp/></Link>   */}    
<Link href="https://www.instagram.com/dengelrivera.dev/" target="_blank"  aria-label="Redirecciona a instagram"><IconInstagram/> </Link>
<Link href="https://www.tiktok.com/@dengel_lionel?is_from_webapp=1&sender_device=pc"  aria-label="Redirecciona a tiktok" target="_blank"><IconTiktok/></Link>
</div>
    </section>

<section>
<h3 className="font-rowdies font-light text-yellow1">Contactame</h3>
<div className="flex flex-row gap-[20px] pt-[18px] pb-[18px]">
<Link href="mailto:denriveracajincho@gmail.com?Subject=Quiero%20contactarme%20contigo%20Dengel" aria-label="Redirecciona a gmail" target="_blank"><IconEmail/></Link>
</div>

</section>
    </div>
   <div className="flex flex-col justify-center">
   <h3 className="font-rowdies font-light text-yellow1 mb-[11px]">Mis servicios</h3>
   <section className="grid grid-cols-[repeat(1,auto)] gap-[10px] transition-all duration-[500ms] lg:gap-[10px]">
    {subLinks?.map((sublink:any,index:any)=>(
      <Link className="text-white3 font-roboto font-medium lg:hover:text-yellow1" key={index} href={sublink.href} target="_blank">{sublink.text}</Link>
    ))} 
   </section>
   </div>
   </div>
           </section>

           
            <section className='font-roboto font-light text-[16px] text-white2 text-center tracking-[0.015em] flex flex-col items-center gap-[18px] transition-all duration-[500ms] mt-[25px] '>
           
           <Link className="text-white3 lg:hover:text-yellow1" href="/politica-privacidad" target="_blank">Política de privacidad</Link>
           <Link className="text-white3 lg:hover:text-yellow1" href="/terminos-condiciones" target="_blank">Terminos y condiciones</Link>
           <span className="text-white3">Diseño + Código © 2023</span>
           <span className="text-white3">Sitio hecho con react js, next js</span>
            
          
           </section>
          
   </section>
  )
}

export default FooterContent