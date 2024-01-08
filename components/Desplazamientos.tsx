import React from 'react'

const Desplazamientos = () => {
  return (
    <div className="relative overflow-hidden w-full h-[90px] bg-green-500">
    <div className="absolute top-0 left-0 h-full w-full flex items-center  space-x-4 animate-marquee">
      {/* Repite las palabras según sea necesario */}
      <span className="text-2xl font-montserrat font-bold w-full inline-block text-white pl-[20px] tracking-wider">EXPERIENCIA COMPROBADA</span>
      <span className="text-2xl font-montserrat font-bold w-full inline-block text-white pl-[20px] tracking-wider">ENFOQUE PERSONALIZADO</span>
      <span className="text-2xl font-montserrat font-bold w-full inline-block text-white pl-[20px] tracking-wider">COMPROMISO CON CALIDAD</span>
      {/* Agrega más palabras según sea necesario */}
    </div>
  </div>
  )
}

export default Desplazamientos