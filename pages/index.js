import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Placeholder from '../public/imgPlaceholder.gif'
import CodeImg from '../public/code1.jpg'

export default function Home({ screenHeight }) {
  const router = useRouter()
  console.log(screenHeight)
  const [isScaled, setisScaled] = useState(false)
  const [isAnimationEnd, setisAnimationEnd] = useState(false)
  useEffect(() => {
    setisScaled(false)
    setisAnimationEnd(false)
    setTimeout(() => {
      setisScaled(true)
    }, 100);
    setTimeout(() => {
      setisAnimationEnd(true)
    }, 3000);
  }, [])
  const buttonClassNames = 'group w-80 flex items-center justify-center hover:bg-white hover:text-black duration-300 cursor-pointer'
  const headingClassNames = `${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} text-9xl font-medium drop-shadow-3xl-black mb-4 duration-[1500ms]`
  return <>
    <div style={{ minHeight: screenHeight -80 }} className={`text-white flex items-center justify-center`}>
      <div>
        <div className={`${headingClassNames}`}>UI-Designer</div>
        <div className={`${headingClassNames} delay-[1000ms] pl-24`}>&amp; Web-Developer</div>
        <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} border rounded-xl border-white flex h-24 w-fit text-5xl font-extralight mx-auto my-8 overflow-hidden delay-[2000ms] duration-[1500ms]`}>
          <Link href={'/projects'}>
            <div className={buttonClassNames}>My work</div>
          </Link>
          <Link href={'/pricing'}>
            <div className={`${buttonClassNames} ${isScaled ? `scale-100 opacity-100 ${!isAnimationEnd && 'delay-[3000ms]'}` : 'scale-[2] opacity-0 delay-[3000ms]'} duration-300 hover:text-black`}>
              Hire me
            </div>
          </Link>
        </div>
        <div className="text-5xl text-right w-full m-4 pr-16">
          <Link href={'/about'}><span className='cursor-pointer'>Frederik Schoof</span></Link>
        </div>
        {/* <div className='text-white'>
          1. Planung
        </div> */}
      </div>
    </div>
  </>
}
