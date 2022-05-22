// import React from 'react'
// import { GoMail } from "react-icons/go";
// import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";



// export default function Social({ screenHeight, screenWidth }) {
//   const Item = ({ bg, children }) => <div className={`${bg} group p-1 w-7 h-7 sm:w-10 sm:h-10 flex items-center duration-300`}>{children}</div>
//   const Content = ({ bg, children }) => (
//     <div className={`${bg} left-7 h-7 sm:left-10 sm:h-10 w-fit flex items-center justify-start absolute overflow-hidden
//         group-hover:scale-x-100 scale-x-0 origin-left duration-300
//         rounded-r-md pl-2 pr-3 cursor-pointer
//         text-white text-md sm:text-lg font-medium whitespace-nowrap`}>
//         {children}
//     </div>
//   )
//   const size = screenWidth < 640 ? 22 : 32
//   console.log(size)
//   return (
//     <div className={`fixed left-0 bottom-8 z-50`}>
//         <Item bg={'bg-cyan-500'}>
//             <GoMail size={size} className='text-white'/>
//             <Content bg={'bg-cyan-500'}><a href= "mailto:schoof.frederik@gmail.com" className='font-medium'>schoof.frederik@gmail.com</a></Content>
//         </Item>
//         <Item bg={'bg-black'}>
//             <FaTelegramPlane size={size} className='text-white'/>
//             <Content bg={'bg-black'}><a className='font-medium'>fvjupiter</a></Content>
//         </Item>
//         <Item bg={'bg-lime-500'}>
//             <FaWhatsapp size={size} className='text-white'/>
//             <Content bg={'bg-lime-500'}><a className='font-medium'>+49 176 61757015</a></Content>
//         </Item>
//         {/* <Item bg={'bg-fuchsia-400'}>
//             <FaInstagram size={size} className='text-white'/>
//             <Content bg={'bg-fuchsia-400'}>fredvjupiter</Content>
//         </Item> */}
//     </div>
//   )
// }


import React from 'react'
import { GoMail } from "react-icons/go";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";



export default function Social({ screenHeight, screenWidth }) {
  const Item = ({ bg, children }) => <div className={`${bg} group p-1 w-7 h-7 sm:w-10 sm:h-10 flex items-center rounded-xl my-4 ring-1 ring-gray-600 hover:ring-white duration-300 cursor-pointer`}>{children}</div>
  const Content = ({ bg, children }) => (
    <div className={`${bg} left-7 h-7 sm:left-10 sm:h-10 w-fit flex items-center justify-start absolute overflow-hidden
        group-hover:scale-x-100 scale-x-0 origin-left duration-300
        rounded-r-md pl-2 pr-3 cursor-pointer
        text-white text-md sm:text-lg font-medium whitespace-nowrap`}>
        {children}
    </div>
  )
  // const size = screenWidth < 640 ? 22 : 32
  const size = 34
  console.log(size)
  return (
    <div className={`flex mx-auto w-72 justify-evenly`}>
        <Item bg={'bg-gradient-to-tr from-teal-300 to-cyan-500'}>
            <GoMail size={size} className='text-white'/>
            {/* <Content bg={'bg-cyan-500'}><a href= "mailto:schoof.frederik@gmail.com" className='font-medium'>schoof.frederik@gmail.com</a></Content> */}
        </Item>
        <Item bg={'bg-gradient-to-tr from-slate-800 to-black'}>
            <FaTelegramPlane size={size-4} className='text-white'/>
            {/* <Content bg={'bg-black'}><a className='font-medium'>fvjupiter</a></Content> */}
        </Item>
        <Item bg={'bg-gradient-to-tr from-lime-400 to-lime-400'}>
            <FaWhatsapp size={size} className='text-white'/>
            {/* <Content bg={'bg-lime-500'}><a className='font-medium'>+49 176 61757015</a></Content> */}
        </Item>
        <Item bg={'bg-gradient-to-tr from-fuchsia-600 to-orange-500'}>
            <FaInstagram size={size} className='text-white'/>
            {/* <Content bg={'bg-fuchsia-400'}>fredvjupiter</Content> */}
        </Item>
    </div>
  )
}
