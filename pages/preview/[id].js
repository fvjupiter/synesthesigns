import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Icon } from '../../lib/icons'

export default function Preview({ screenHeight, screenWidth}) {
    console.log(screenHeight)
    console.log(screenWidth)
  return <>
    <div className={`z-[100] top-0 fixed h-screen w-screen bg-white`}>
        <Link href={'/projects'}>
            <div className={`backdrop flex items-center bg-black rounded-bl-xl border-2 hover:border-white border-gray-400 duration-300 bg-opacity-60 justify-center h-16 w-16 cursor-pointer fixed top-0 right-0 z-100`}><Icon id={'close'} classN={`text-gray-400 hover:text-white duration-300`} size={70}/></div>
        </Link>
        <iframe src="http://localhost:3000/" height={screenHeight} width={screenWidth} title="description"></iframe>
    </div>
</>
}
