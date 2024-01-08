import IconEmail from "./Icons/IconEmail"

import IconWhatsapp from "./Icons/IconWhatsapp"
import IconTelegram from "./Icons/IconTelegram"
import IconInstagram from "./Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
import IconLogomas1024 from "./Icons/IconLogomas1024"
import IconLogo from "./Icons/IconLogo"
import Link from "next/link"
import { subLinks } from "../user/User"

const FooterContent = () => {
  return (
    <footer className="bg-gray-800 text-white font-montserrat py-8 px-8 mt-[80px]">
    <div className="container mx-auto lg:flex lg:justify-between">
      {/* Columna 1 */}
      <div className="mb-4 lg:w-1/3 lg:mb-0">
        <h2 className="text-2xl font-bold mb-2 ">CREA TIENDA YA</h2>
        <p>Crea tienda ya E.I.R.L. . Tu solución completa para tu ecommerce. Desarrollamos tiendas virtuales a medida para tu negocio, potenciando tus ventas en el mundo digital.</p>
        <p>Celular: +51906064049</p>
      </div>

      {/* Columna 2 */}
      <div className="mb-4 lg:w-1/3 lg:ml-[35px]">
        <h2 className="text-2xl font-bold mb-2">Conócenos</h2>
        <ul className="flex flex-col gap-[9px]">
          <li>
            <a href="/conocenos" className="hover:underline">
             CONOCENOS
            </a>
          </li>
          <li>
            <a href="#contactanos" className="hover:underline">
             CONTACTANOS
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
             PREGUNTAS FRECUENTES
            </a>
          </li>
          <li className="flex flex-row gap-[25px] justify-center">
          <li>
              <a href="https://www.tiktok.com/@creatiendaya"  title="TIKTOK"  className={`text-black2 transition-all duration-150 hover:text-green-500 `}>
               <IconTiktok/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dengelrivera.dev/"  title="INSTAGRAM"  className={`text-black2 transition-all duration-150 hover:text-green-500 `}>
               <IconInstagram/>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/creatiendaya/"  title="Facebook"  className={`text-black2 transition-all duration-150 hover:text-green-500`}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0C5.15868 0 0 5.15888 0 11.5C0 17.8413 5.15868 23.0004 11.5 23.0004C17.8409 23.0004 23 17.8413 23 11.5C23 5.15888 17.8409 0 11.5 0ZM14.7502 7.25972C14.7502 7.31418 14.7286 7.3664 14.6901 7.4049C14.6516 7.44341 14.5994 7.46504 14.5449 7.46504L13.2376 7.46586C12.3751 7.46586 12.2174 7.80177 12.2174 8.46331V9.83567H14.4595C14.5184 9.83567 14.5747 9.86113 14.6135 9.90548C14.6523 9.94983 14.6704 10.0088 14.6632 10.0673L14.3439 12.5379C14.3375 12.5874 14.3133 12.6329 14.2758 12.6658C14.2383 12.6988 14.1901 12.7169 14.1402 12.7169H12.2174V18.8517C12.2174 18.9062 12.1958 18.9584 12.1573 18.9969C12.1187 19.0354 12.0665 19.057 12.0121 19.057H9.46117C9.40671 19.057 9.35449 19.0354 9.31598 18.9969C9.27748 18.9584 9.25585 18.9062 9.25585 18.8517V12.7169H7.32686C7.27241 12.7169 7.22018 12.6953 7.18168 12.6568C7.14317 12.6183 7.12154 12.5661 7.12154 12.5116V10.041C7.12154 9.98654 7.14317 9.93431 7.18168 9.89581C7.22018 9.8573 7.27241 9.83567 7.32686 9.83567H9.25585V8.21877C9.25585 6.07728 10.5518 4.74721 12.6385 4.74721C13.5355 4.74721 14.3283 4.81394 14.5718 4.84618C14.6212 4.8527 14.6665 4.87693 14.6993 4.91436C14.7321 4.95179 14.7502 4.99987 14.7502 5.04965V7.25972Z" fill="#ABA7C0"/>
</svg>

              </a>
            </li>
          </li>
         
        </ul>
      </div>

      {/* Columna 3 */}
      <div className="hidden lg:block lg:w-1/3">
        <h2 className="text-2xl font-bold mb-2">NUESTRAS POLÍTICAS</h2>
        <ul className="flex flex-col gap-[10px] ">
          <li>
            <a href="/politica-de-privacidad" className="hover:underline">
             POLÍTICA DE PRIVACIDAD
            </a>
          </li>
          <li>
            <a href="/terminos-y-condiciones" className="hover:underline">
            TERMINOS Y CONDICIONES
            </a>
          </li>
        
        </ul> 
      </div>
    </div>
    <div className="hidden lg:block lg:w-full lg:mt-[30px]">
      
        <p>&copy; 2024 CREA TIENDA YA E.I.R.L. . Todos los derechos reservados.</p>
      </div>
    {/* Acordeón para dispositivos móviles */}
    <div className="lg:hidden mt-4">
    <h2 className="text-2xl font-bold mb-2">NUESTRAS POLÍTICAS</h2>
        <ul className="flex flex-col gap-[10px] ">
          <li>
            <a href="/politica-de-privacidad" className="hover:underline">
             POLÍTICA DE PRIVACIDAD
            </a>
          </li>
          <li>
            <a href="/terminos-y-condiciones" className="hover:underline">
            TERMINOS Y CONDICIONES
            </a>
          </li>
        
        </ul> 
    </div>
  </footer>
  )
}

export default FooterContent