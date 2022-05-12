import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import CodeImg from '../public/code1.jpg'
import FredyImg from '../public/fredy.jpeg'
import BlueOrangeSpiral from '../public/blueOrangeSpiral.jpg'
import Placeholder from '../public/imgPlaceholder.gif'
import Footer from '../components/Footer'
import Social from '../components/Social'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const asPath = router.asPath
  const navItems = [
    ['Home', '/', 'bg-white'], 
    ['Pricing', '/pricing', 'bg-lime-400'],
    ['Projects', '/projects', 'bg-cyan-400'], 
    ['About', '/about', 'bg-teal-400']
  ]
  const [id, setid] = useState(0)
  const [bgImg, setbgImg] = useState(CodeImg)
  useEffect(() => {
    for (let i = 0; i < navItems.length; i++) {
      if(asPath.includes(navItems[i][1])) setid(i)
    }
    switch (asPath) {
      case '/pricing': setbgImg(BlueOrangeSpiral); break;
      case '/projects': setbgImg(BlueOrangeSpiral); break;
      default: setbgImg(null); break;
    }
  }, [asPath])

  const heightDiv = useRef()
  const [height, setheight] = useState(0)
  const [width, setwidth] = useState(0)
  useEffect(() => {
    setheight(heightDiv.current.clientHeight)
    setwidth(heightDiv.current.clientWidth)
  }, [])
  
  return <>
    <Head>
      <title>Web-Dev Frederik Schoof</title>
      <meta name="description" content="Modern Web-Apps" />
      <link rel="icon" href="/fredy.jpeg" />
    </Head>
    <div ref={heightDiv} className='h-screen w-screen fixed -z-50'/>
    <TopBar id={id} setid={setid} navItems={navItems}/>
    <Social screenHeight={height} />
    <div className='mt-20 z-10 w-screen absolute overflow-scroll'>
      <Component {...pageProps} screenHeight={height} screenWidth={width}/>
      <Footer />
    </div>
    <div className='top-0 left-0 right-0 bottom-0 fixed z-0 bg-black'>
    {
      (asPath == '/pricing' || asPath == '/projects') ? <>
        <Image 
            src={BlueOrangeSpiral}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit={'cover'}
            objectPosition='center'
        />
        <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-r via-transparent from-black/60 to-black/60`}/>
      </>
      : asPath == '/about' ?
        <Image 
            src={FredyImg}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit={'contain'}
            objectPosition='center'
        />
      : <>
        <Image 
            src={CodeImg}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit={'cover'}
            objectPosition='center'
        />
        <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-t via-black/80 from-black`}/>
      </>
    }
    </div>
  </>
}

export default MyApp
