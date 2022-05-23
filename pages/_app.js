import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Hacker from '../public/hacker.jpg'
import Diamond from '../public/diamond.jpg'
import Blockchain from '../public/blockchain.jpg'
import FredyImg from '../public/fredy.jpeg'
import BlueOrangeSpiral from '../public/blueOrangeSpiral.jpg'
import Footer from '../components/Footer'

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
  useEffect(() => {
    for (let i = 0; i < navItems.length; i++) {
      if(asPath.includes(navItems[i][1])) setid(i)
    }
  }, [asPath])

  const screenRef = useRef()
  const [screen, setscreen] = useState({ height: 0, width: 0 })
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
        setscreen({ height: entries[0].contentRect.height, width: entries[0].contentRect.width })
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
    <div className='mt-20 z-10 w-screen absolute'>
      <Component {...pageProps} screen={screen}/>
      {screen.height && <Footer />}
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
      </>
    }
    </div>
  </>
}

export default MyApp
