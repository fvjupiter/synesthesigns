import React, { useState, useEffect, useRef } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }) {
  const screenRef = useRef()
  const [screen, setscreen] = useState({ height: 0, width: 0 })
  useEffect(() => {
    smoothscroll.polyfill();
    const observer = new ResizeObserver(entries => {
        setscreen({ height: entries[0].contentRect.height, width: entries[0].contentRect.width })
    })
    observer.observe(screenRef.current)
    return () => screenRef.current && observer.unobserve(screenRef.current)
  }, [])
  
  return <>
    <div ref={screenRef} className='h-screen w-screen fixed -z-50'/>
    <Layout screen={screen}>
      <Component {...pageProps} screen={screen}/>
    </Layout>
  </>
}

export default MyApp
