import Image from "next/image"
import IconGithub from "../Icons/IconGithub"
import IconInstagram from "../Icons/IconInstagram"
import IconLinkedin from "../Icons/IconLinkedin"
import ButtonContactRedSocial from "./ButtonContactRedSocial"
const SobreMi = () => {
  return (
   
    <div className='hidden md:h-full md:flex md:items-center md:justify-center md:w-full'>
       
        <section className='flex flex-col gap-[57px]'>

        <section className='bg-white5 pt-[38px] pl-[28px] pr-[28px] pb-[28px] md:w-[347px] h-auto rounded-br-[21px] rounded-bl-[21px] rounded-tr-[21px] rounded-tl-[21px] shadow-shadow2 xl:w-[490px]'>
       
            <h2 className={` font-rowdies text-[24px] leading-[28px] tracking-[0.015em] text-secundary2 mb-[39px]`}>Sobre mi:</h2>
            <p className="font-roboto font-medium text-[20px] text-secundary2">Ofrezco soluciones de desarrollo web y móvil personalizadas y eficientes a empresas y organizaciones. Con mi experiencia en tecnología y mi pasión por aprender y adquirir nuevas habilidades, puedo ayudar a transformar sus ideas en productos digitales de alta calidad y a lograr sus objetivos de negocio.</p>
            <article className="flex flex-row justify-center items-center gap-[18.49px] mt-[16px]">
            <ButtonContactRedSocial href="https://www.linkedin.com/in/driveracajincho/" download={false} Icon={<IconLinkedin/>}/>
            <ButtonContactRedSocial href="https://github.com/DengelLionel" download={false} Icon={<IconGithub/>}/>
            <ButtonContactRedSocial href="https://www.instagram.com/dengelrivera.dev/" download={false} Icon={   <IconInstagram fill={"#201F47"}/>}/>
            
            
          
                
            </article>
        </section>
       
            <button className='bg-yellow2 w-[303px] rounded-br-[24px] rounded-bl-[24px] rounded-tr-[24px] rounded-tl-[24px] pt-[12px] pb-[13px] text-center font-roboto font-semibold text-[20px] tracking-[0.015em] leading-[23px] hover:yellow2 transition-all duration-500'>Mira mi brochure</button>
         
        </section>
       

        <section className='flex flex-col gap-[15px] items-center justify-center'>
            <Image className='rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-tl-[20px]' height={200} width={140} alt="Foto de perfil" src="https://res.cloudinary.com/darps1cta/image/upload/v1677882692/sitioweb/optimizado_bxuu0i.png"/>
          
            <h2 className="font-rowdies text-textPrimary2 font-normal tracking-[0.01em] leading-[30px] text-[24px]">Dengel Rivera</h2>
            <h2 className="font-rowdies text-yellow1 font-light text-[20px] leading-[25px] tracking-[0.015em]">Desarrollador frontend</h2>
            <h2 className="font-rowdies text-textPrimary2 font-light leading-[25px] tracking-[0.015em] text-[20px]">Freelancer</h2>
            <p className='w-[263px] font-roboto font-semibold text-[20px] leading-[23px] tracking-[0.015em] text-textPrimary2 text-center xl:w-[295px]'>“Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día”</p>
          
        </section>
    </div>
    
  )
}

export default SobreMi