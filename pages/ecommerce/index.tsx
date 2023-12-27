import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import {HeaderTwo,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 
import NavDesktop from '../../components/NavDesktop'
import LinkNav from '../../components/LinkNav'
import IconHome from '../../components/Icons/IconHome'
import IconJob from '../../components/Icons/IconJob'
import IconBlog from '../../components/Icons/IconBlog'
import IconBrochure from '../../components/Icons/IconBrochure'
import IconPlantilla from '../../components/Icons/IconPlantilla'
import IconModule from '../../components/Icons/IconModule'
import LinkNavLittleDesktop from "../../components/LinkNavLittleDesktop"
import FooterContent from '../../components/FooterContent'
import IconLogo from '../../components/Icons/IconLogo'
import SubNav from '../../components/SubNav'
import Contenido from '../../components/ecommerce'
import Image from 'next/legacy/image'


export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
  return (

    <div>
      <Head>
        <title>Servicios de tiendas virtuales Shopify</title>
        <meta name="description" content="Con los servicios de tiendas virtuales Shopify, podrás crear una plataforma de comercio electrónico atractiva y fácil de usar. Vende tus productos en línea con una tienda en línea personalizada y optimizada para motores de búsqueda. Descubre cómo Shopify puede ayudarte a impulsar tu negocio en línea." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      
      <header className="font-roboto tracking-[0.015em]">
      <HeaderTwo navMobileContent={<NavMobileTypeTwo 
       openSubNav={openSubNav} 
       setOpenSubNav={setOpenSubNav} 
       colorSubNav='bg-sky-600' 
linksSubNav={<SubNav />} 
colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} openMenu={openMenu}>
    <LinkNav Icon={ <IconHome/>} text={" Mi punto de partida"} hreff={"/"}/>
        <LinkNav Icon={ <IconModule/>} text={" Mis servicios integrales"} OnClick={()=>setOpenSubNav(true)}/>
        <LinkNav Icon={ <IconJob/>} text={" Mi repositorio de proyectos"} hreff={"/portafolio"}/>
        <LinkNav Icon={ <IconBrochure/>} text={"Mi brochure"} hreff={"#"}/>
        <LinkNav Icon={ <IconBlog/>} text={"Mi brog"} hreff={"/miblog"}/>
        <LinkNav Icon={ <IconPlantilla/>} text={"Mis plantillas web premium"} hreff={"#"}/>
    </NavMobileTypeTwo>} 
      logo={<Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link>} LinksNavDesktop={<NavDesktop/>} colorHeader='bg-primary ' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} 
      
      navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur"} openMenuDesktop={openMenuDesktop}>
      <LinkNavLittleDesktop href="#" Icon={<IconBrochure/>} text="Mi brochure"/>
      <LinkNavLittleDesktop href="/miblog" Icon={<IconBlog/>} text="Mi blog"/>
      <LinkNavLittleDesktop href="#" Icon={<IconPlantilla/>} text="Mis plantillas web premium"/>
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
  </header>



      <main className='bg-gradient-to-t w-full h-full from-secundary2 via-secundary3 to-secundary3 pb-[40px] ' >
      
     <section className={styles.fondo}>
     <section className='lg:w-full lg:flex lg:flex-row 2xl:justify-center 2xl:items-center'>
      <section>
 
     <h1 className='text-[36px] font-rowdies font-normal text-center text-textPrimary2 p-[16px] leading-[45px] tracking-[0.015em] mb-[12px] sm:text-[40px] sm:w-[500px] md:text-[48px] md:w-[610px] md:p-[20px] md:leading-[60px] lg:ml-[20px] lg:mb-[12px] lg:text-left xl:text-[55px] xl:w-[710px] xl:p-[32px] xl:leading-[60px]'>¿Estás listo para dar el salto al mundo del comercio electrónico?</h1>
    

     
     <article className='p-[16px] font-roboto text-center font-medium text-[24px] leading-[35px] tracking-[0.015em] text-textPrimary sm:text-[26px] md:flex md:justify-center md:items-center md:leading-[50px] md:p-[20px] lg:items-center lg:leading-[40px] lg:font-bold xl:ml-[32px] xl:mb-[32px]'>
      <p className=' lg:w-[560px]'>Nuestros servicios te ayudará a tener tu tienda en línea de forma fácil y rápida. Agenda una reunión virtual conmigo y comienza a vender tus productos en internet</p>
     </article>
     <article className='flex justify-center items-center p-[16px] mt-[21px] mb-[21px] lg:ml-[20px] xl:ml-[32px] xl:mt-0 '>
     <Link href={'https://calendly.com/denriveracajincho/30min'} target='_blank' className='font-roboto font-bold text-[20px] text-center bg-yellow1 text-azul3 pt-[10px] pb-[10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] w-[200px] sm:text-[26px] sm:w-[292px] lg:w-[280px] lg:transition-all lg:duration-[500ms] lg:hover:bg-yellow3 lg:hover:text-azul4 xl:w-[300px] '>Agendar reunión </Link>
     </article>
    
     </section>
     <article className='hidden lg:flex lg:relative lg:w-[400px] lg:h-[386px] lg:-left-[150px] xl:-left-0'>
     <Image layout='fill' src="https://res.cloudinary.com/darps1cta/image/upload/v1679613044/sitioweb/ecomerc_xtd6gq.png"/>
     </article>
     </section>
     <article className='relative pl-[16px] w-[200px] h-[193px] pr-[16px] pb-[50px] sm:flex sm:justify-center  md:pb-[80px] lg:hidden'>
     <Image layout='fill' src="https://res.cloudinary.com/darps1cta/image/upload/v1679613044/sitioweb/ecomerc_xtd6gq.png"/>
    
     </article>
     </section>
        <Contenido/>
     
      </main>
      <footer className='bg-azul2 w-full h-auto p-[16px]'>
      <FooterContent/>
      </footer>
    </div>
  )
}
