"use client"
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa"


const socials = [
    {icon: <FaFacebook />, path:''},
    {icon: <FaGithub />, path:''},
    {icon: <FaLinkedinIn />, path:''},
    {icon: <FaInstagram />, path:''},
]
function Social({contanerStyle , iconStyle}) {
  return (
    <div className={contanerStyle}>
     {socials.map((item, index)=>{
        return(
            <Link key={index} href={item.path} className={iconStyle}> {item.icon} </Link>
        )
     })}
    </div>
  )
}

export default Social
