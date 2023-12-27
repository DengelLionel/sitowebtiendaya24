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
import ImagenWebPersonalizada from '../../components/webpersonalizada/ImagenWebPersonalizada'
import ImagenWebPersonalizadaSmall from '../../components/webpersonalizada/ImagenWebPersonalizadaSmall'
import Contenido from '../../components/webpersonalizada/Contenido'


export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
  return (

    <div>
      <Head>
        <title>Páginas web personalizadas</title>
        <meta name="description" content="Consigue una página web personalizada que se adapte a tus necesidades y objetivos de negocio. Diseñada en WordPress o con código nativo, tu sitio web será único y eficiente en la optimización para motores de búsqueda. Descubre cómo podemos ayudarte a destacar en línea con nuestro servicio de páginas web personalizadas." />
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
    {/*     <LinkNav Icon={ <IconPlantilla/>} text={"Mis plantillas web premium"} hreff={"#"}/> */}
    </NavMobileTypeTwo>} 
      logo={<Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link>} LinksNavDesktop={<NavDesktop/>} colorHeader='bg-primary ' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} 
      
      navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur"} openMenuDesktop={openMenuDesktop}>
      <LinkNavLittleDesktop href="#" Icon={<IconBrochure/>} text="Mi brochure"/>
      <LinkNavLittleDesktop href="/miblog" Icon={<IconBlog/>} text="Mi blog"/>
     {/*  <LinkNavLittleDesktop href="#" Icon={<IconPlantilla/>} text="Mis plantillas web premium"/> */}
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
  </header>



      <main className='bg-gradient-to-t w-full h-full from-secundary2 via-secundary3 to-secundary3 pb-[40px] ' >
      
     <section className={styles.fondo}>
     <section className='lg:w-full lg:flex lg:flex-row 2xl:justify-center 2xl:items-center'>
      <section>
 
     <h1 className='text-[36px] font-rowdies font-normal text-center text-textPrimary2 p-[16px] leading-[45px] tracking-[0.015em] mb-[12px] sm:text-[40px] sm:w-[500px] md:text-[48px] md:w-[610px] md:p-[20px] md:leading-[60px] lg:ml-[20px] lg:mb-[12px] lg:text-left xl:text-[55px] xl:w-[710px] xl:p-[32px] xl:leading-[60px]'>Desarrollo de sitios webs personalizados</h1>
    

     
     <article className='p-[16px] font-roboto text-center font-medium text-[24px] leading-[35px] tracking-[0.015em] text-textPrimary sm:text-[26px] md:flex md:justify-center md:items-center md:leading-[50px] md:p-[20px] lg:items-center lg:leading-[40px] lg:font-bold xl:ml-[32px] xl:mb-[32px]'>
      <p className=' lg:w-[560px]'>Landing Page, blogs y sitios informativos</p>
     </article>
     <article className='flex justify-center items-center p-[16px] mt-[21px] mb-[21px] lg:ml-[20px] xl:ml-[32px] xl:mt-0 '>
     <Link href="https://wa.me/+51961151921?text=Hola%20quiero%20cotización%20de%20páginas%20web%20personalizadas" target='_blank' className='font-roboto font-bold text-[20px] text-center bg-yellow1 text-azul3 pt-[10px] pb-[10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] w-[200px] sm:text-[26px] sm:w-[292px] lg:w-[280px] lg:transition-all lg:duration-[500ms] lg:hover:bg-yellow3 lg:hover:text-azul4 xl:w-[300px] '>Quiero cotización ahora!!</Link>
     </article>
    
     </section>
     <article className='hidden lg:flex lg:relative lg:-left-[150px] xl:-left-0'>
     <ImagenWebPersonalizada/>
     </article>
     </section>
     <article className='pl-[16px] pr-[16px] pb-[50px] sm:flex sm:justify-center  md:pb-[80px] lg:hidden'>
     <ImagenWebPersonalizadaSmall/>
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
