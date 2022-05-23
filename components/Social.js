import React from 'react'
import { GoMail } from "react-icons/go";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Social() {
  const Item = ({ bg, children }) => (
    <div className={`${bg} group p-1 w-10 h-10 center rounded-xl my-4 ring-2 hover:ring-white duration-300 cursor-pointer`}>
      {children}
    </div>
  )
  const size = 35

  return (
    <div className={`center mx-auto w-72 justify-evenly`}>
        <Item bg={'bg-gradient-to-tr from-teal-300 to-cyan-500'}>
            <GoMail size={size} className='text-white'/>
        </Item>
        <Item bg={'bg-gradient-to-tr from-slate-800 to-black'}>
            <FaTelegramPlane size={size-4} className='text-white'/>
        </Item>
        <Item bg={'bg-gradient-to-tr from-lime-400 to-lime-400'}>
            <FaWhatsapp size={size} className='text-white'/>
        </Item>
        <Item bg={'bg-gradient-to-tr from-fuchsia-600 to-orange-500'}>
            <FaInstagram size={size} className='text-white'/>
        </Item>
    </div>
  )
}
