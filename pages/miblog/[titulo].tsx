import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import {HeaderTwo,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState,memo,useEffect } from 'react'
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
import { useRouter } from 'next/router'
import { publicaciones,publicaciones_populares } from '../../user/PublicacionesBlog'
import Card from '../../components/miblog/Card'
import Header from '../../components/layouts/Header'

const Publicacion=()=> {
    const router=useRouter()
    const {titulo}=router.query
const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
const [publicacion,setPublicacion]=useState<any>()
const [categoria,setCategoria]=useState<any>()
const [publiPopulares,setPubliPopulares]=useState<any>()
const [categoriaPopulares,setCategoriaPopulares]=useState<any>()
let interval:any
const obteniendoCategoria=publicacion?.[0]?.categoria||publiPopulares?.[0]?.categoria

useEffect(()=>{
    interval=setInterval(()=>{
     
      setPublicacion(publicaciones.filter((publi:any)=>titulo===publi.url))
      setPubliPopulares(publicaciones_populares.filter((publi:any)=>titulo===publi.url))
      setCategoria(publicaciones.filter((publi:any)=>obteniendoCategoria===publi.categoria))
      setCategoriaPopulares(publicaciones_populares.filter((publi:any)=>obteniendoCategoria===publi.categoria))
    },0.001)
   
   return ()=>clearInterval(interval)
},[titulo,interval,categoria,categoriaPopulares])
  return (

    <div>
      <Head>
        <title>{publicacion?.[0]?.titulo||publiPopulares?.[0]?.titulo}</title>
      
        <meta name="description" content={publicacion?.[0]?.description_seo||publiPopulares?.[0]?.description_seo} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      
     <Header/>


      <main className='bg-white2 w-full h-full pt-[16px] pl-[16px] pr-[16px] pb-[40px] flex flex-col mt-[100px] gap-[13px] md:pl-[20px] md:pt-[49px]  md:pr-[20px]' >
        <div className='flex flex-col gap-[13px] md:flex md:flex-row md:gap-[50px]'>
        <section className='w-[328px] bg-sky-600 rounded-[5px] font-rowdies font-right text-center pt-[34px] pl-[22px] pr-[22px] pb-[34px] text-[24px] text-white md:bg-transparent md:w-[600px] md:text-azul2  md:text-[26px] md:flex md:justify-center md:items-center'><h1>{publicacion?.[0]?.titulo||publiPopulares?.[0]?.titulo}</h1></section>
       <div className='relative w-[328px] h-[213px] md:w-[400px] md:h-[300px]'>
       <Image className='md:rounded-[10px]' layout='fill' alt={publicacion?.[0]?.titulo||publiPopulares?.[0]?.titulo} src={publicacion?.[0]?.imagen||publiPopulares?.[0]?.imagen}/>
       </div>
        </div>
      
       <section className='md:flex md:flex-col md:justify-center md:items-center md:mt-[38px] md:gap-[38px]'>
       <p className='font-roboto font-normal text-[20px] md:w-[569px] lg:w-[800px]'>{publicacion?.[0]?.parrafo||publiPopulares?.[0]?.parrafo}</p>
       <section className='w-[325px] relative h-[108px] md:w-[506px] lg:w-[750px] rounded-[5px] mt-[29px] mb-[29px]'>
          <Image layout='fill' alt={`image publicidad`} src={`https://res.cloudinary.com/darps1cta/image/upload/v1679434685/sitioweb/Lionel_RC_landing_page_de_venta_de_productos_ecommerce_0377c7c4-a080-4732-9dab-b58eda0f0a74_flotqr.png`}/>
        </section>
       </section>
       
       
        <h2 className='font-rowdies font-right text-[24px] text-center'>Articulos relacionados</h2>
        <div className='p-[16px] flex flex-wrap w-full justify-center items-center md:flex md:flex-wrap md:w-full md:gap-[20px] md:justify-center '>
          {categoria?.map((publicacion:any,index:any)=>(
                <Card 
                key={index}
                keyy={index}
                url={publicacion.url}
                imagen={publicacion.imagen}
                categoria={publicacion.categoria}
                titulo={publicacion.titulo}
                />
          ))}
          {categoriaPopulares?.map((publicacion:any,index:any)=>(
                <Card 
                key={index}
                keyy={index}
                url={publicacion.url}
                imagen={publicacion.imagen}
                categoria={publicacion.categoria}
                titulo={publicacion.titulo}
                />
          ))}
      
        </div>
      </main>
    
      <FooterContent/>
  
    </div>
  )
}
export default memo(Publicacion)