import Head from 'next/head'
import Link from 'next/link'
import MiBlogBody from '../../components/miblog'
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
import Header from '../../components/layouts/Header'



export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
  return (

    <div>
      <Head>
        <title>Mi blog - Dengel Rivera dev</title>
        <meta name="description" content="Descubre nuestro blog y mantente actualizado sobre los temas más relevantes en nuestro sector. Encuentra artículos útiles, noticias de actualidad y consejos prácticos para mejorar tu negocio. Únete a nuestra comunidad y aprende con nosotros." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      <Header/>
     



      <main className='bg-white2 w-full h-full mt-[100px]  pb-[40px] md:pl-[20px] md:pt-[49px]  md:pr-[20px]' >
    
        <MiBlogBody/>
     
      </main>
      <FooterContent/>
    </div>
  )
}
