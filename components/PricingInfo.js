import React, { useState, useEffect, useRef } from 'react'

export default function PricingInfo({ isCardInfo }) {
    const [infoHeight, setinfoHeight] = useState(0)
    const infoRef = useRef()
    useEffect(() => setinfoHeight(infoRef.current.clientHeight), [])
  return (
    <div style={{ height: isCardInfo ? infoHeight : 0 }}
        className={`${isCardInfo && `mb-32`} overflow-hidden
        w-full px-4 duration-500 ease-in-out z-20 rounded-2xl text-justify text-md sm:text-lg
        `}>
        <div ref={infoRef} className='font-light'>
            A <span className='font-bold'>Web-App</span> is basically a Website which preloads and stores the single pages, 
            so it can behave like a desktop or mobile app.<br/><br/>
            <span className='font-bold'>Content-Management-System (CMS):</span><br/>
            You can manage all your
            content by yourself without writing one line of code. The Web-App will be updated
            automatically.<br/><br/>
            <span className='font-bold'>Install-Function:</span><br/>
            Your Web-App will be installable on Smartphones
            and PC&apos;s which means that your users can use your App offline, directly
            accessable through their Homescreen. The App will be updated in the background
            if you change the content.<br/>
            Check it out <a 
                href="https://sup2fredy.vercel.app/" 
                rel="noreferrer" 
                target='_blank' 
                className='font-medium text-lime-300 hover:text-lime-100 active:text-cyan-400 cursor-pointer'>
                    @sup2fredy
            </a>&nbsp;(click &apos;add to Homescreen&apos; in your browser to install the app on your smartphone)
            <br/><br/>
            <span className='font-bold'>User-Authentication:</span><br/> Users will be able to log-in to your Web-App to e.g. save,
            comment and like your posts.<br/><br/>
            <span className='font-bold'>Individual Logo:</span><br/>
            Creation of your custom logo by <a 
                href="https://synesthesigns.com/" 
                rel="noreferrer" 
                target='_blank' 
                className='font-medium text-lime-300 hover:text-lime-100 active:text-cyan-400 cursor-pointer'>
                    IM3K - Designs
            </a> (available soon)<br/><br/>
            <span className='font-bold'>Individual Design:</span><br/>
            You can choose how much you want to decide on the design-aspects of your Web-App or leave it completely open to Synesthesigns ;-)
            
            <ul className='px-4 mt-8'>
                <li className='font-light list-decimal'>Add or remove <span className='font-bold'>features &amp; pages</span> (a page / section is an area on the Web-App e.g. <span className='font-bold'>Home</span>, <span className='font-bold'>About</span> or an <span className='font-bold'>Image-Gallery</span>. Synesthesigns e.g. is 
                made out of four pages: Home, Pricing, Projects, About and contains an extra section on the Homepage (What I do))</li>
                <li className='font-light list-decimal'>The price is a prediction and can vary based on your requirements</li>
                <li className='font-light list-decimal'>Hit <span className='font-bold'>Send Request</span> to send me an e-mail and receive a <span className='font-bold'>personal offer</span></li>
                <li className='font-light list-decimal'>Please provide additional information about what kind of Web-App you&apos;re looking for as well as your <span className='font-bold'>design wishes</span></li>
            </ul>
        </div>
    </div>
  )
}
