import React from 'react'
import Head from 'next/head'
import Header from '../components/layouts/Header'
import StoryComponent from '../components/StoryComponent'
import BeneficioConocenos from '../components/BeneficioConocenos'
import Whatsapp from '../components/Whatsapp'
const conocenos= () => {
  const storyTitle = 'La historia detrás de cómo se fundó nuestra agencia de Desarrollo y diseño';
  const storyDescription =
    'Es nuestra experiencia la que nos equipa, nuestras emociones las que nos impulsan y nuestra creatividad eso nos distingue. Para ayudar a mantener a nuestros clientes enfocados en el complejo mundo del ecommerce, creamos diseños unicos y desarrollos unicos. Creemos que los pequeños negocios son importantes en esta sociedad por eso venimos a ayudarlos.';
  const storyImageUrl = 'https://res.cloudinary.com/dh9etf988/image/upload/v1695181735/creatiendaya/datos-que-no-sabias-de-nosotros.png';
  return (
    <>
      <Head>
				<title>Conócenos - Crea Tienda Ya: Expertos en crear y potenciar tienda virtual</title>
				<meta name="description" content="Somos un equipo de expertos dedicados a ayudarte a crear y potenciar tu tienda virtual, sin importar el país en el que te encuentres. Conoce nuestra historia, nuestros valores y nuestra pasión por el ecommerce. Estamos aquí para hacer realidad tus espectativas."/>
				<meta name="keywords" content="Conócenos, crea tienda ya, crear tienda virtual, potenciar tienda online, ecommerce, emprendimiento, shopify,woocommerce,dropshipping"/>
    <meta name="robots" content="index, follow"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <main className='pb-[40px] ' >
      <StoryComponent title={storyTitle} description={storyDescription} imageUrl={storyImageUrl} videoUrl='https://res.cloudinary.com/dh9etf988/video/upload/v1695174939/creatiendaya/conocenos_crea_tienda_ya_i7abca.mp4'/>
   <BeneficioConocenos/>
   <Whatsapp/>
   </main>
    </>
  )
}

export default conocenos