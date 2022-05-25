import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Background from './Background'

export default function Layout({ screen, children }) {
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

    return <>
        <Head>
            <title>Synesthesigns</title>
            <meta name="description" content="Modern Web-Apps" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopBar id={id} setid={setid} navItems={navItems}/>

        <div className='mt-20 z-10 w-screen absolute'>
            {children}
            {screen.height && <Footer />}
        </div>

        <Background asPath={asPath}/>
    </>
}
