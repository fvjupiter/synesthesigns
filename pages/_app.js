import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import CodeImg from '../public/code1.jpg'
import Hacker from '../public/hacker.jpg'
import Gold from '../public/gold.jpg'
import Gold1 from '../public/gold1.jpg'
import Diamond from '../public/diamond.jpg'
import Blockchain from '../public/blockchain.jpg'
import FredyImg from '../public/fredy.jpeg'
import BlueOrangeSpiral from '../public/blueOrangeSpiral.jpg'
import Footer from '../components/Footer'
import Social from '../components/Social'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const asPath = router.asPath
  const navItems = [
    ['Home', '/', 'bg-white ring ring-purple-500/50'], 
    ['Pricing', '/pricing', 'bg-white ring ring-lime-500/60'],
    ['Projects', '/projects', 'bg-white ring ring-blue-500/70'], 
    ['About', '/about', 'bg-white ring ring-pink-400/50']
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

  const screenRef = useRef()
  const [height, setheight] = useState(0)
  const [width, setwidth] = useState(0)
  // useEffect(() => {
  //   setheight(screenRef.current.clientHeight)
  //   setwidth(screenRef.current.clientWidth)
  // }, [])
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
        setwidth(entries[0].contentRect.width)
        setheight(entries[0].contentRect.height)
    })
    observer.observe(screenRef.current)
    return () => screenRef.current && observer.unobserve(screenRef.current)
}, [])
  
  return <>
    <Head>
      <title>Web-Dev Frederik Schoof</title>
      <meta name="description" content="Modern Web-Apps" />
      <link rel="icon" href="/fredy.jpeg" />
    </Head>
    <div ref={screenRef} className='h-screen w-screen fixed -z-50'/>
    <TopBar id={id} setid={setid} navItems={navItems}/>
    {/* <Social screenHeight={height} screenWidth={width}/> */}
    <div className='mt-20 z-10 w-screen absolute overflow-scroll'>
      <Component {...pageProps} screenHeight={height} screenWidth={width}/>
      {height && <Footer />}
    </div>
    <div className='top-0 left-0 h-screen w-screen fixed z-0 bg-black'>
    {
      asPath == '/pricing' ? <>
        <Image 
            src={Diamond}
            placeholder="blur"
            layout='fill' 
            objectFit={'cover'}
            objectPosition='center'
        />
        {/* <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-r via-transparent from-black/60 to-black/60`}/> */}
      </>
      : asPath == '/projects' ? <>
        <Image 
            src={Blockchain}
            placeholder="blur"
            layout='fill' 
            objectFit={'cover'}
            objectPosition='center'
        />
        <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 sm:from-transparent sm:via-transparent sm:to-transparent`}/>
      </>
      : asPath == '/about' ?
        <Image 
            src={FredyImg}
            placeholder="blur"
            layout='fill' 
            objectFit={'contain'}
            objectPosition='center'
        />
      : <>
        <Image 
            src={Hacker}
            placeholder="blur"
            layout='fill' 
            objectFit={'cover'}
            objectPosition='center'
        />
        {/* <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-t via-black/80 from-black`}/> */}
      </>
    }
    </div>
  </>
}

export default MyApp
