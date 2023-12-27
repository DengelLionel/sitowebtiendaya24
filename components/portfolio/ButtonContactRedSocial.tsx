import React from 'react'
import Link from "next/link"
interface buttonContact{
    Icon:any,
    Text?:string,
    href:string,
    download?:boolean
}
const ButtonContactRedSocial = ({Icon,Text,href,download}:buttonContact) => {
  return download==false?(
    <Link className='flex flex-row gap-[23px] font-roboto not-italic font-semibold text-[16px] leading-[19px] tracking-[0.015em] text-textPrimary' href={href} target="_blank">
    {Icon} <span>{Text}</span>
   </Link>
  ):(
    <Link type='button' className='flex flex-row gap-[23px] font-roboto not-italic font-semibold text-[16px] leading-[19px] tracking-[0.015em] text-textPrimary' href={href} target="_blank">
    {Icon} <span>{Text}</span>
   </Link>
  )
}

export default ButtonContactRedSocial