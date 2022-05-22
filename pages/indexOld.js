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

  const headingClassNames = `${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} 
    text-7xl sm:text-8xl xl:text-9xl mb-2 sm:mb-4 px-6 lg:px-32 xl:px-24
    font-medium drop-shadow-3xl-black duration-[1500ms]`

  const buttonClassNames = `group w-40 sm:w-[288px] lg:w-80 h-16 sm:h-24
    flex items-center justify-center hover:bg-white hover:text-black duration-300 cursor-pointer`

  return <>
    <div style={{ minHeight: screenHeight -80 }} className={`text-white flex lg:items-center items-start justify-center`}>
      <div className={`w-[400px] sm:w-[640px] lg:w-[1024px] xl:w-[1280px] sm:pt-8`}>
        <div className={`${headingClassNames} sm:pr-40`}>UI-Designer</div>
        <div className={`${headingClassNames} delay-[1000ms] lg:text-right`}>&amp; Web-Developer</div>
        <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} border rounded-xl border-white flex font-extralight mx-auto overflow-hidden delay-[2000ms] duration-[1500ms]
          w-fit text-3xl sm:text-5xl mt-6 my-2 sm:my-8
        `}>
          <Link href={'/projects'}>
            <div className={buttonClassNames}>My work</div>
          </Link>
          <Link href={'/pricing'}>
            <div className={`${buttonClassNames} ${isScaled ? `scale-100 opacity-100 ${!isAnimationEnd && 'delay-[3000ms]'}` : 'scale-[2] opacity-0 delay-[3000ms]'} duration-300 hover:text-black`}>
              Hire me
            </div>
          </Link>
        </div>
        <div className="text-4xl sm:text-6xl text-right pr-6 sm:pr-8 sm:text-right lg:pr-32 w-full my-4">
          <Link href={'/about'}><span className='cursor-pointer'>Frederik Schoof</span></Link>
        </div>
        {/* <div className='text-white'>
          1. Planung
        </div> */}
      </div>
    </div>
  </>
}
