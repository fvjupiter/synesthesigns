import React from 'react'
import { GoMail } from "react-icons/go";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";



export default function Social({ screenHeight, screenWidth }) {
  const Item = ({ bg, children }) => <div className={`${bg} group p-1 w-7 h-7 sm:w-10 sm:h-10 flex items-center duration-300`}>{children}</div>
  const Content = ({ bg, children }) => (
    <div className={`${bg} left-7 h-7 sm:left-10 sm:h-10 w-fit flex items-center justify-start absolute overflow-hidden
        group-hover:scale-x-100 scale-x-0 origin-left duration-300
        rounded-r-md pl-2 pr-3
        text-white text-md sm:text-lg font-medium whitespace-nowrap`}>
        {children}
    </div>
  )
  const size = screenWidth < 640 ? 22 : 32
  console.log(size)
  return (
    <div className={`fixed left-0 bottom-8 z-50`}>
        <Item bg={'bg-cyan-500'}>
            <GoMail size={size} className='text-white'/>
            <Content bg={'bg-cyan-500'}>schoof.frederik@gmail.com</Content>
        </Item>
        <Item bg={'bg-black'}>
            <FaTelegramPlane size={size} className='text-white'/>
            <Content bg={'bg-black'}>fvjupiter</Content>
        </Item>
        <Item bg={'bg-lime-500'}>
            <FaWhatsapp size={size} className='text-white'/>
            <Content bg={'bg-lime-500'}>+49 176 61757015</Content>
        </Item>
        {/* <Item bg={'bg-fuchsia-400'}>
            <FaInstagram size={size} className='text-white'/>
            <Content bg={'bg-fuchsia-400'}>fredvjupiter</Content>
        </Item> */}
    </div>
  )
}
