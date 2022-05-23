import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home({ screen }) {
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
      }, 3500);
    }, [])
    const buttonClassNames = `group w-40 sm:w-[288px] lg:w-80 h-16 sm:h-24
    center hover:bg-white hover:text-black duration-300 cursor-pointer`


    const lineArr = [
        `Content-Management`,
        `Web-Development`, 
        `Creative Design`,
        `User-Interfaces`,
        `Hosting`,
        `SEO`,
      ]



  return <>
    {screen.height && <div style={{ minHeight: screen.height -80 }} className='center'>
        <div>
            <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-[0.5] opacity-0'} 
                h-fit w-fit mx-auto text-5xl sm:text-7xl py-3 sm:py-4 px-2 sm:px-16 md:px-8 md:text-8xl 
                bg-black bg-opacity-30 backdrop overflow-hidden 
                rounded-2xl border border-white ring-4 ring-cyan-500/50 shadow-2xl duration-[1500ms]`}>
                <div className='synesthesigns cursor-default'>SYNESTHESIGNS</div>
            </div>
            <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} 
                border ring-4 ring-cyan-500/50 rounded-xl border-white bg-black bg-opacity-30 backdrop 
                text-white font-extralight text-3xl sm:text-5xl 
                flex w-fit mt-8 my-2 mx-auto
                overflow-hidden delay-[1000ms] duration-[1000ms]
            `}>
                <Link href={'/projects'}>
                    <div className={buttonClassNames}>My work</div>
                </Link>
                <Link href={'/pricing'}>
                    <div className={`${buttonClassNames} 
                        ${isScaled ? `scale-100 opacity-100 ${!isAnimationEnd && 'delay-[2000ms]'}` : 'scale-[2] opacity-0 delay-[3000ms]'} 
                        duration-300 hover:text-black`}>
                        Hire me
                    </div>
                </Link>
            </div>
            <div className={`${isScaled ? `opacity-100 ${!isAnimationEnd && 'duration-[2500ms] delay-[1000ms]'}` : 'opacity-0'} 
                mt-4 mb-3 text-4xl sm:text-6xl mx-auto w-fit 
                hover:text-white text-gray-100 textShadow 
                duration-300 cursor-pointer overflow-hidden rounded-2xl`}>
                <Link href={'/about'}><span className=''>Frederik Schoof</span></Link>
            </div>
        </div>
    </div>}
  </>
}
