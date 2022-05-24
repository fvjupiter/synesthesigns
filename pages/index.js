import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MdDoubleArrow } from "react-icons/md";
import Accordeon from '../components/Accordeon';

export default function Home({ screen }) {
    const [accordeonId, setaccordeonId] = useState(-1)
    const [isScrolledToTop, setisScrolledToTop] = useState(true)
    const [isScaled, setisScaled] = useState(false)
    const [isAnimationEnd, setisAnimationEnd] = useState(false)
    const [showScrollButton, setshowScrollButton] = useState(false)

    useEffect(() => {
      setisScrolledToTop(true)
      setisScaled(false)
      setisAnimationEnd(false)
      setshowScrollButton(false)

      setTimeout(() => setisScaled(true), 100);
      setTimeout(() => setisAnimationEnd(true), 3500);
      setTimeout(() => setshowScrollButton(true), 2250);
    }, [])

    const buttonClassNames = `group w-40 sm:w-[288px] lg:w-80 h-16 sm:h-24
    center hover:bg-white hover:text-black duration-300 cursor-pointer`

    const abc = useRef()
    const scrollRef = useRef()
    const scrollDown = () => scrollRef.current.scrollIntoView({ behavior: "smooth" })

    useEffect(() => {
        const interV = setInterval(() => {
            if(abc.current.getBoundingClientRect().top > -80) setisScrolledToTop(true)
            else setisScrolledToTop(false)
        }, 500)
    
      return () => clearInterval(interV)
    }, [])

  return <>
    {screen.height && <><div ref={abc} className='w-0 h-0 -mt-20 mb-20'/>
        <div style={{ minHeight: screen.height -80 }} className='center'>
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
        </div>
        <div ref={scrollRef} className='invertBg h-screen center'>
            <div className='w-80 sm:w-96 mx-auto border-4 border-purple-900 ring-2 ring-purple-500/50'>
                {accordeonData.map((item, index) => (
                    <div className={`${accordeonId == index ? 'border-white bg-black/40' : 'border-transparent bg-black/80 hover:bg-black/50'} border-t-2 border-b-2 duration-100`}>
                        <Accordeon index={index} title={item[0]} accordeonId={accordeonId} setaccordeonId={setaccordeonId}>
                            {item[1]}
                        </Accordeon>
                    </div>
                ))}
            </div>
        </div>
        <div onClick={isScrolledToTop ? scrollDown : null}
            className={`${showScrollButton ? `bottom-12 rotate-90 -ml-10 ${isScrolledToTop ? 'opacity-100 cursor-pointer' : 'opacity-0'}` : 'opacity-0 bottom-40 sm:bottom-56 rotate-[270deg]'} 
                duration-1000 group ${isScrolledToTop ? '' : ''} fixed w-20 h-20 center inset-x-1/2`}>
                <MdDoubleArrow size={70} className='text-gray-200 group-hover:text-white duration-100'/>
        </div>
    </>}
  </>
}

const accordeonData = [
    ['Web-Development', 'abcdsassdfg'],
    ['Creative Design', 'abcdsassdfg'],
    ['User-Interfaces', 'abcdsassdfg'],
    ['Content-Management', 'abcdsassdfg'],
    ['Hosting', 'abcdsassdfg'],
    ['SEO', 'abcdsassdfg']
]
const lineArr = [
    `Content-Management`,
    `Web-Development`, 
    `Creative Design`,
    `User-Interfaces`,
    `Hosting`,
    `SEO`,
]