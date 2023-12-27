import React from 'react'
import Image from 'next/legacy/image'
import Link from "next/link"
interface cardProyect{
  id:number,
  titulo:string,
  imagen:string,

}
const CardProjectExperienceDesktop = ({id,titulo,imagen}:cardProyect) => {
  return (
  <Link href={`/portafolio/${id}`} className=' cursor-pointer relative w-[300px] h-[200px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>

    <Image className=' rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' alt='card' layout="fill" src={imagen}/>
    <article className='w-full relative z-[20] md:top-[55.5%] h-[90px] z-[20] rounded-bl-[20px] rounded-br-[20px] bg-blackDegradado text-white2 flex justify-center items-end text-center  font-roboto font-bold pb-[15px]'>
        <h3>{titulo}</h3>
    </article>
  </Link>
  )
}

export default CardProjectExperienceDesktop