import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home({ screenHeight }) {
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
    flex items-center justify-center hover:bg-white hover:text-black duration-300 cursor-pointer`
  return <>
    {screenHeight && <div style={{ minHeight: screenHeight -80 }} className='flex justify-center items-center'>
        <div>
            <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-[0.5] opacity-0'} duration-[1500ms] mx-auto text-5xl sm:text-7xl py-4 px-4 sm:px-16 md:px-8 md:text-8xl h-fit w-fit bg-black bg-opacity-30 backdrop overflow-hidden rounded-2xl border border-white ring-4 shadow-2xl`}>
                <div className='synesthesigns cursor-default'>SYNESTHESIGNS</div>
            </div>
            <div className={`${isScaled ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} border ring-4 rounded-xl border-white flex bg-black bg-opacity-30 backdrop text-white font-extralight mx-auto overflow-hidden delay-[1000ms] duration-[1000ms]
                w-fit text-3xl sm:text-5xl mt-8 my-2 
            `}>
                <Link href={'/projects'}>
                    <div className={buttonClassNames}>My work</div>
                </Link>
                <Link href={'/pricing'}>
                    <div className={`${buttonClassNames} ${isScaled ? `scale-100 opacity-100 ${!isAnimationEnd && 'delay-[2000ms]'}` : 'scale-[2] opacity-0 delay-[3000ms]'} duration-300 hover:text-black`}>
                    Hire me
                    </div>
                </Link>
            </div>
            <div className={`${isScaled ? `opacity-100 ${!isAnimationEnd && 'duration-[2500ms] delay-[1000ms]'}` : 'opacity-0'} mt-4 text-4xl sm:text-6xl mx-auto hover:text-white text-gray-100 w-fit textShadow duration-300 cursor-pointer overflow-hidden rounded-2xl`}>
                <Link href={'/about'}><span className=''>Frederik Schoof</span></Link>
            </div>
            {/* <div className='flex justify-between mx-auto p-4 backdrop rounded-2xl border border-white ring-2 text-white text-xl'>
                <div className='pl-4 w-40 sm:w-[288px] lg:w-80 font-bold text-4xl items-center flex justify-start'>
                    1. Planning<br/>
                    2. Custom Design<br/>
                    3. Production<br/>
                </div>
                <div className='w-40 sm:w-[288px] lg:w-80 font-bold text-center'>
                    Web-Development<br/>
                    Responsive Design<br/>
                    User-Interfaces<br/>
                    Content-Management<br/>
                    Search-Engine-Optimization<br/>
                    Hosting<br/>
                </div>
            </div> */}
        </div>
    </div>}
  </>
}
