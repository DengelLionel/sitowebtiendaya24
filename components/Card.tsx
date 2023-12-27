import Image from 'next/legacy/image'
import styles from "../styles/CardServicios.module.css"
import IconStar from './Icons/IconStar'
interface cards{
  image:string,
  titulo:string,
}

const Card = ({image,titulo}:cards) => {
  return (
    <div >
    <section className={styles.card}>
      <div  className={styles.content1}>
        <article className='relative w-full h-full'>
        <Image className='rounded-tr-[20px] rounded-tl-[20px]'  src={image}   layout="fill"
      alt={titulo}/>
        </article>
     
      </div>
      <article className='w-[177px] h-[175px] text-white2 font-roboto font-bold text-[24px] leading-[28px] text-center tracking-[0.015em] flex justify-center items-center p-[9px] bg-primary rounded-tl-[0px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[20px] sm:w-[282px] sm:h-[150px] sm:rounded-tl-[0px] sm:rounded-tr-[0px] sm:rounded-bl-[20px] sm:rounded-br-[20px] md:leading-[32px]'>
        <h3 className='w-[257px] font-roboto not-italic font-bold text-[16px] leading-[25px] text-center tracking-[0.015em] text-white2 md:text-[20px] lg:text-[24px] lg:leading-[33px]'> {titulo}</h3>
      </article>
    </section >

    <section className={styles.card1024}>
      <article className={styles.content}>
      <article className='relative w-full h-[200px]'>
      <Image className=" rounded-tr-[20px] rounded-tl-[20px]"  src={image} priority={true} layout="fill" alt={titulo}/>
      </article>
     
  
        <h3 className='w-[257px] font-roboto not-italic font-bold text-[16px] leading-[25px] text-center tracking-[0.015em] text-white2 md:text-[20px] lg:text-[24px] lg:leading-[33px]'>{titulo}</h3>
        <article className={styles.IconStart}>
        <IconStar/>
        </article>
       
      </article>
     
    </section >

    </div>
   
  )
}

export default Card