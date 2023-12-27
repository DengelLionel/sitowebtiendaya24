import Card from './Card'
import service from "../styles/CardServicios.module.css"
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
const MisServicios = () => {
  return (
   <ContainerGeneral>
    <Titulo titulo="Mis servicios más Solicitados"/>
    <section className={service.container}>
    <Card titulo='Páginas web personalizadas' image='https://res.cloudinary.com/darps1cta/image/upload/v1679362482/sitioweb/mejorsa_ac00jd.png'/>
    <Card titulo='Tiendas virtuales - ecommerce' image='https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg'/>
    </section>
   </ContainerGeneral>
  )
}

export default MisServicios