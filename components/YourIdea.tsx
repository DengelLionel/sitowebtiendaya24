import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import PartnerPhoto from "/public/images/dengel.png";
import ArrowRight from "/public/images/arrow_right.svg";
import SliderBeneficios from './SliderBeneficios';
interface idea{
    titulo:string
}
const YourIdea = ({titulo}:idea) => {
    const router = useRouter();

    const handleButtonClick = () => router.push('#');
    const images = [
      {
        mobile: "https://res.cloudinary.com/dh9etf988/image/upload/v1697256601/creatiendaya/creamos_tu_tienda_online_shopify_1_y68yj6.png",
        desktop: "https://res.cloudinary.com/dh9etf988/image/upload/v1697246592/creatiendaya/dise%C3%B1amos_y_creamos_tu_tienda_online_shopify_ex5hrc.png"
      },
      {
        mobile: "https://res.cloudinary.com/dh9etf988/image/upload/v1697671489/creatiendaya/pantalla_celular_h2em8g.png",
        desktop: "https://res.cloudinary.com/dh9etf988/image/upload/v1697247776/creatiendaya/tienda_ii_1_msx4fv.png"
      }
    ];
    const beneficios = [
      {
        beneficio: "Aumenta la visibilidad y el reconocimiento de marca"
      },
      {
        beneficio: "Mejora la experiencia del cliente"
      },
      {
        beneficio: "Genera confianza y credibilidad"
      },
      {
        beneficio: "Separa a tu tienda de la competencia"
      },
      {
        beneficio: "Crea una comunidad"
      }
    ];
    return (
      <section className="bg-white">
        <div className="flex flex-col justify-center items-center lg:flex-row mx-auto max-w-7xl p-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl font-montserrat lg:text-[30px] font-bold text-gray-800 mb-4 sm:text-center md:text-4xl md:mb-6 max-w-md lg:text-left">
              {titulo}
            </h2>
  
            <div className="flex flex-row gap-[5px] md:justify-center items-center md:w-full lg:justify-left lg:items-left">
              <Image className="w-[48px] h-[48px] md:w-[47px] md:h-[42px] object-cover rounded-full" src={PartnerPhoto} alt="Foto de Dengel" />
  
              <div className="md:col-span-1">
                <p className="text-base lg:text-lg font-semibold text-gray-800">
                  Dengel - Shopify partner
                </p>
                <p className="text-sm lg:text-lg lg:w-[280px] text-gray-700">
                  ¿Quieres un diseño personalizado para tu tienda online?
                </p>
              </div>
            </div>
  
            <div className="flex items-center space-x-2 mt-[15px] md:mb-[80px]">
              <a href="https://wa.link/futxo7" className="bg-green-500 flex flex-row gap-[51px] items-center text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-[18px]" onClick={handleButtonClick}>
                Cuéntanos tu idea
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5165 8.11794H0.000244141V13.5299H19.5165V21.6478L26.0002 10.8239L19.5165 0V8.11794Z" fill="white"/>
</svg>

              </a>
            
            </div>
          </div>
  
          {/* Beneficios */}
          <div className="md:w-1/2 flex justify-center flex-col items-center">
            <div className="bg-green-500 text-white font-bold text-center p-[10px] rounded-t-md w-[170px] rounded-t-[50px] lg:w-[239px]">
              BENEFICIOS
            </div>
  <SliderBeneficios beneficios={beneficios}/>
          {/*   <Slide autoplay={true} scale={1.4} arrows={false} infinite={true}>
              {beneficios.map((item, index) => (
                <div key={index} className="p-4 text-center">
                  <p>{item.beneficio}</p>
                </div>
              ))}
            </Slide> */}
          </div>
        </div>
      </section>
    )
}

export default YourIdea
