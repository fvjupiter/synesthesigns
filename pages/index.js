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
        <div style={{ minHeight: screen.height -80 }} className='center no-select'>
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
                    mt-4 text-4xl sm:text-6xl mx-auto w-fit 
                    hover:text-white text-gray-100 textShadow 
                    duration-300 cursor-pointer overflow-hidden rounded-2xl`}>
                    <Link href={'/about'}><div className=''>Frederik Schoof</div></Link>
                    <div className={`h-1 bg-white ring-4 rounded-3xl my-2 mt-3 ${isAnimationEnd ? 'w-10/12 ring-cyan-500/50' : 'w-0 ring-transparent'} mx-auto duration-500`}/>
                    <div className='text-2xl font-medium text-center textShadow'>Web-Developer</div>
                </div>
                <div className={`${isAnimationEnd && 'animate-pulse'} hover:animate-none w-fit mx-auto`}>
                    <div onClick={isScrolledToTop ? scrollDown : null}
                        className={`${showScrollButton ? `rotate-90 translate-y-0 translate-x-0 ${isScrolledToTop ? 'opacity-100 cursor-pointer' : 'opacity-0'}` : 'opacity-0 -translate-y-40 translate-x-12 rotate-[270deg]'} 
                            duration-1000 group w-20 h-20 center mx-auto`}>
                            <MdDoubleArrow size={70} className={`text-gray-200 group-hover:text-white duration-100`}/>
                    </div>
                </div>
            </div>
        </div>
        <div ref={scrollRef} className='invertBg h-screen center'>
            <div>
                <div className='text-5xl text-center text-white mb-2 font-light textShadow'>What I do</div>
                <div className={`h-1 bg-white ring-4 rounded-3xl mb-4 ${!isScrolledToTop ? 'w-10/12 ring-purple-500/50' : 'w-0 ring-transparent'} mx-auto delay-200 duration-500`}/>
                <div className='w-80 sm:w-96 mx-auto border border-purple-900 ring-2 ring-purple-500/50 rounded-2xl overflow-hidden'>
                    {accordeonData.map((item, index) => (
                        <div key={index} 
                            className={`${accordeonId == index ? `border-white bg-black/50` 
                                : 'border-transparent bg-black/80 hover:bg-black/50'} 
                                ${index != 0 && 'border-t'} 
                                ${index != accordeonData.length -1 && 'border-b'} 
                                duration-100`
                            }>
                            <Accordeon index={index} title={item[0]} accordeonId={accordeonId} setaccordeonId={setaccordeonId} clickAnywhere>
                                {item[1]}
                            </Accordeon>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>}
  </>
}

const accordeonData = [
    ['Web-Development', `Synesthesigns is using modern, industry-leading technologies to ship fast, reliable and secure Web-Apps like Homepages, Portfolios, Blogs that stand out to it's customers`],
    ['Responsive Design', `Web-Apps by Synesthesigns are made to work perfectly on mobile-screens and wide-screens without any function-loss`],
    ['User-Interfaces', `Synesthesigns is focused on creating efficient, simple-to-use interfaces to guarantee a great user-experience throughout the whole Web-App`],
    ['Content-Management', `Every Web-App by Synesthesigns is shipped with editor-acces via Contentful.com ® to manage all it's data. So you'll be able to update every piece of content whenever you want`],
    ['Hosting', `Web-Apps are hosted at Vercel.com ®`],
    ['SEO', `Search-Engine-Optimization is a big deal nowadays to be fastly discoverable in Search-Engines and gain more users quickly`],
    ['Web-Games', `Synesthesigns builds small Web-Games (e.g. Text-Adventures, Click-Games) on demand`]
]
