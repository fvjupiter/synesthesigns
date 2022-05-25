import React, { useRef, useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Accordeon({ index, title, accordeonId, setaccordeonId, clickAnywhere, children }) {
    const contentDiv = useRef()
    const [height, setheight] = useState(0)
    useEffect(() => setheight(contentDiv.current.clientHeight), [])
    const isClicked = accordeonId == index
    
  return <>
    <div onClick={() => clickAnywhere && setaccordeonId(isClicked ? -1 : index) } className={`w-full text-white ${clickAnywhere && 'cursor-pointer'}`}>
      <div onClick={() => !clickAnywhere && setaccordeonId(isClicked ? -1 : index) } 
        className={`duration-150 h-12 sm:h-16 px-4 flex justify-between items-center cursor-pointer`}>
        <div className='font-bold'>{title}</div>
        <IoIosArrowDown className={`${index == accordeonId && 'rotate-180'} duration-300`} size={20}/>
      </div>
      <div 
        style={{ height: isClicked ? height : 0 }}
        className={`overflow-hidden duration-300`}>
        <div ref={contentDiv} className='px-4 pb-4 font-normal'>{children}</div>
      </div>
    </div>
  </>
}

