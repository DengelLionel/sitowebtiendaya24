import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
import service from "../styles/CardServicios.module.css"
import Card from './Card'
const HechaVistasoProyectos = () => {
  return (
   <ContainerGeneral>
   <Titulo titulo='Echa un vistazo a mis proyectos'/>
   <section className={service.container}>
   <Card titulo='Creo páginas informativas de calidad' image='https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg'/>
   <Card titulo='Creo páginas informativas de calidad' image='https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg '/>
   </section>
   </ContainerGeneral>
  )
}

export default HechaVistasoProyectos