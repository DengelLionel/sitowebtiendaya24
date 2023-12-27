
interface titulo{
    titulo:string,
    idd?:any
}

const Titulo = ({titulo,idd}:titulo) => {
  return (
      <h2 id={idd} className='font-rowdies font-normal not-italic text-[32px] text-center leading-[40px] tracking-[0.015em] p-[16px] text-white2 sm:w-[418px] sm:text-center md:text-[48px] md:w-[600px] md:leading-[50px] lg:text-[50px] lg:w-[800px] lg:leading-[48px] xl:font-light 2xl:leading-[57px] '>{titulo}</h2>
  )
}

export default Titulo