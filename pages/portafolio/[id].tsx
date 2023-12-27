import Head from 'next/head'
import Link from 'next/link'
import {HeaderOne,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useEffect, useState, memo} from 'react'
import "componentes-dengel/dist/style.css" 
import LinkNav from '../../components/portfolio/LinkNav'
import IconLogo from '../../components/Icons/IconLogo'
import SubNav from '../../components/SubNav'
import IconHomePort from '../../components/Icons/IconHomePort'
import LinkNavPortfolio from '../../components/LinkNavPortfolio'
import IconProject from '../../components/Icons/IconProject'
import IconSkill from '../../components/Icons/IconSkill'
import IconArrowBack from '../../components/Icons/IconArrowBack'
import IconDownload from '../../components/Icons/IconDownload'
import { useContext } from 'react'
import {SiteContextVal} from '../../context/SiteContext'
import { proyectExperience } from '../../user/User'
import { useRouter } from 'next/router'
import AllMobile from '../../components/portfolio/AllMobile'
import MostrandoProyecto from '../../components/portfolio/MostrandoProyecto'
 const IdService=()=> {
const {openMenuDesktop,setOpenMenuDesktop}=useContext(SiteContextVal)
const[openMenu,setOpenMenu]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
const router=useRouter()
const {id}=router.query
let identificador:string|undefined|any=id
const [proyecto,setProyecto]=useState<any>()
let interval:any

useEffect(()=>{
    interval=setInterval(()=>{
     
      setProyecto(proyectExperience.filter((proyect:any)=>parseInt(identificador)===proyect.id))
    },0.001)
   
   return ()=>clearInterval(interval)
},[id,interval])


  return (

    <div >
      <Head>
        <title>{proyecto?.[0]?.titulo}</title>
        <meta name="description" content="Dengel Rivera dev - Mi portafolio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>


    
     
   
      <main className='bg-gradient-to-t w-full h-full  md:flex md:flex-1  from-secundary2 via-secundary3 to-secundary3 md:gap-[50px] md:h-[100vh] md:w-full' > 
      <HeaderOne 
navMobileContent={ <NavMobileTypeTwo 
colorSubNav='bg-sky-600'
 linksSubNav={
<SubNav />} 
openSubNav={openSubNav} 
setOpenSubNav={setOpenSubNav} 
colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} 
openMenu={openMenu}>

<LinkNav Icon={<IconHomePort/>} href="#sobremi" text="Sobre mi"/>
<LinkNav Icon={<IconProject/>} href="#misproyectos" text="Mis proyectos"/>
<LinkNav Icon={<IconSkill/>} href="#mishabilidades" text="Mis habilidades"/>

</NavMobileTypeTwo>}
posicion="lg:justify-center"
logo={<article className='flex flex-row items-center gap-[20px]'><IconArrowBack BackClick={()=>router.push('/')}/><Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link> </article>} 
LinksNavDesktop={<section className='flex flex-col gap-[26px]'>
 
    <LinkNavPortfolio download={false} Icon={<IconHomePort/>} href="/portafolio" text="Sobre mi"/>
    <LinkNavPortfolio download={false} Icon={<IconProject/>} href="/misproyectos" text="Mis proyectos"/>
   <LinkNavPortfolio download={false} Icon={<IconSkill/>} href="/habilidades" text="Mis habilidades"/>
   <LinkNavPortfolio download={true} Icon={<IconDownload/>} href="/files/cv_dengel_rivera_2023.pdf" text="Descarga mi cv"/>
    
</section>} 
colorHeader='bg-primary' 
openMenuDesktop={openMenuDesktop}
  openMenu={openMenu} 
  navDesktopLittle={<NavDesktopTypeTwo 
  colorNavLittleDesktop={"bg-sky-500"}
   openMenuDesktop={openMenuDesktop}>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
</NavDesktopTypeTwo>} 
setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/> 
      <AllMobile/>
     <div className='hidden w-full  h-full  md:flex md:justify-center md:items-center md:p-[20px] lg:p-[30px]'>
    {/*  <h2> QUE BIEN  {id}</h2> */}
     <MostrandoProyecto 
     id={proyecto?.[0]?.id}
      titulo={proyecto?.[0]?.titulo}
      imagen={proyecto?.[0]?.imagen}
      descripcion={proyecto?.[0]?.descripcion}
      github={proyecto?.[0]?.github}
      sitioweb={proyecto?.[0]?.sitioweb}
      video={proyecto?.[0]?.video}
      imagenesPresentacion={proyecto?.[0]?.imagenesPresentacion}
     />
     </div>
       

      </main>
      </div>
     
      
 
  )
}
export default memo(IdService)