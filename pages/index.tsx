import Head from 'next/head'
import "componentes-dengel/dist/style.css" 
import MisServicios from '../components/MisServicios'
import LoQueYoOfrezco from '../components/LoQueYoOfrezco'
import Preguntas from '../components/Preguntas'
import Formulario from '../components/Formulario'
import FooterContent from '../components/FooterContent'
import Header from '../components/layouts/Header'
import Action from '../components/Action'
import Sliders from '../components/Sliders'
import Beneficios from '../components/Beneficios'
import Whatsapp from '../components/Whatsapp'
export default function Home() {

  return (

    <div>
      <Head>
      <title>Crea tienda ya | Creación y mejora de tiendas online</title>
<meta name="description" content="Crea Tienda Ya es tu aliado para desarrollar, crear y mejorar tu tienda online. Convierte tus sueños en realidad digital. Somos expertos en el crecimiento de tiendas en línea y estamos comprometidos en ayudarte a lanzar y hacer prosperar tu negocio en línea de manera efectiva y exitosa. ¡Descubre cómo podemos hacer que tu visión cobre vida en el mundo digital hoy mismo!" />
<meta name="keywords" content="crear tienda online, tienda virtual, tiendas virtuales Perú, tiendas virtuales gratis, tienda en línea, ecommerce, creación de tiendas, negocio en línea, dropshipping, emprendimiento,emprendedor,tienda virtual ecuador,tienda virtual colombia, tienda virtual chile, tienda virtual mexico" />
<meta name="robots" content="index, follow" />
        <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      
     <Header/>
  


      <main className='pb-[40px] ' >
      <Sliders/>
      <Beneficios/>
     <MisServicios/>
     <LoQueYoOfrezco/>
     
  {/* <HechaVistasoProyectos/> */}
    {/*  <PlantillasWeb/> */}
     <Preguntas/>
     <Action link='https://wa.link/zqg997' titulo='Potencia tu tienda online existente' description='Mejoramos tu tienda online con un rediseño espectacular. Escribenos para más información.' boton='QUIERO MEJORAR MI TIENDA' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1703663849/creatiendaya/diseno-tienda-online_1_mdyj9v.png'/>
     <Formulario/>
     <Whatsapp/>
      </main>
     <FooterContent/>
    </div>
  )
}
