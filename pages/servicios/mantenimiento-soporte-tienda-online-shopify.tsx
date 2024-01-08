import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import Prices from '../../components/Prices'
const Mantenimiento = () => {
  return (
    <div>
       <Head>
       <title>Mantenimiento o soporte de tienda online shopify</title>
        <meta name="robots" content="index, follow"></meta>
        <meta name="description" content="Mantenimiento y/o soporte para tu tienda online shopify" />
        <meta name="keywords" content="soporte tienda online shopify, mantenimiento shopify, mantenimiento tienda online"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <Prices/>
    </div>
  )
}

export default Mantenimiento
