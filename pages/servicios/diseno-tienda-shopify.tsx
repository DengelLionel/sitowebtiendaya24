import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import HeroHeader from '../../components/HeroHeader'
import YourIdea from '../../components/YourIdea'
import ContainerGeneral from '../../components/ContainerGeneral'
import Titulo from '../../components/Titulo'
import Procesos from '../../components/Procesos'
import Desplazamientos from '../../components/Desplazamientos'
import Image from 'next/image'
import EmpresasColabore from '../../components/ecommerce/EmpresasColabore'
import Proyectos from '../../components/Proyectos'
import FooterContent from '../../components/FooterContent'
const DisenoTiendashopify = () => {
  const procesos=[
    {
      titulo:"Consulta Inicial",
      descripcion:"Nos reunimos contigo para comprender tus objetivos y necesidades específicas."
    },
    {
      titulo:"Diseño y Desarrollo",
      descripcion:"Creamos y personalizamos tu tienda, incorporando tu visión y garantizando la funcionalidad."
    },
    {
      titulo:"Pruebas y Optimización",
      descripcion:"Probamos exhaustivamente tu tienda para garantizar un funcionamiento perfecto y la máxima eficiencia."
    }
  ]
  return (
    <div>
       <Head>
       <title>Diseño de tiendas online shopify</title>
        <meta name="robots" content="index, follow"></meta>
        <meta name="description" content="Diseñamos tiendas online shopify" />
        <meta name="keywords" content="diseño shopify, diseño web, diseño de tiendas"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <section className="flex flex-col justify-center">
  <HeroHeader palabra="DISEÑO" titulo=" DE TIENDAS ONLINE SHOPIFY" contenido="Somos expertos diseñando tiendas online, somos" />
  <YourIdea titulo="Diseño de tienda online a código  shopify para mejorar tu visibilidad online" />
<div className='flex flex-col justify-center items-center'>
<Titulo titulo='PROCESO DE TRABAJO'/>
<Procesos procesos={procesos}/>
<Titulo titulo='¿POR QUÉ ELEGIRNOS?'/>
 <Desplazamientos/> 
 <Titulo titulo='NUESTRAS HERRAMIENTAS'/>
 <ContainerGeneral>
  <Image  width={200} height={84} alt='LIQUID' src={'https://res.cloudinary.com/dh9etf988/image/upload/v1704229937/creatiendaya/An-overview-of-Liquid-2016_q37cqq.jpg'}/>
  <Image width={200} height={84} alt='HYDROGEN' src={'https://res.cloudinary.com/dh9etf988/image/upload/v1704229937/creatiendaya/1_ZJtr7nGBHWXJXKjF4r474g_ttclbs.webp'}/>
 </ContainerGeneral>
 <Titulo titulo='NUESTROS CLIENTES'/>
 <EmpresasColabore/>
 <Titulo titulo='NUESTROS PROYECTOS'/>
 <Proyectos/>
 <FooterContent/>
</div>
 
  
</section>

    </div>
  )
}

export default DisenoTiendashopify