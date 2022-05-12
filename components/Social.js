import React from 'react'
import { GoMail } from "react-icons/go";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";



export default function Social({ screenHeight }) {
  const Item = ({ bg, children }) => <div className={`${bg} group p-1 w-10 h-10 flex items-center duration-300`}>{children}</div>
  const Content = ({ bg, children }) => (
    <div className={`${bg} left-10 h-10 w-fit flex items-center justify-start absolute overflow-hidden
        group-hover:scale-x-100 scale-x-0 origin-left duration-300
        rounded-r-md pl-2 pr-3
        text-white text-lg font-medium whitespace-nowrap`}>
        {children}
    </div>
  )
//   top: screenHeight / 2 - 100
  return (
    <div style={{ bottom: 0 }} className={`fixed left-0 z-50`}>
        <Item bg={'bg-cyan-500'}>
            <GoMail size={32} className='text-white'/>
            <Content bg={'bg-cyan-500'}>schoof.frederik@gmail.com</Content>
        </Item>
        <Item bg={'bg-black'}>
            <FaTelegramPlane size={32} className='text-white'/>
            <Content bg={'bg-black'}>fvjupiter</Content>
        </Item>
        <Item bg={'bg-lime-500'}>
            <FaWhatsapp size={32} className='text-white'/>
            <Content bg={'bg-lime-500'}>+49 176 61757015</Content>
        </Item>
        {/* <Item bg={'bg-fuchsia-400'}>
            <FaInstagram size={32} className='text-white'/>
            <Content bg={'bg-fuchsia-400'}>fredvjupiter</Content>
        </Item> */}
    </div>
  )
}
