import React from 'react'
import FredyImg from '../public/fredy.jpeg'
import Image from 'next/image'
import Placeholder from '../public/imgPlaceholder.gif'

export default function About({ screenHeight }) {
  return (
    <div style={{ minHeight: screenHeight -80 }} className={``}>
      <div style={{ marginTop: screenHeight -200 }} className=' backdrop text-white w-full mx-auto sm:w-[620px] md:w-[748px] lg:w-[1004px] md:text-2xl sm:text-xl text-base lg:text-3xl px-7 py-5 md:px-8 md:py-6 lg:py-8 lg:px-12 border-2 border-white rounded-3xl ring-2 sm:ring-teal-400 bg-black bg-opacity-50 text-justify'>
      <p>My name is Frederik Schoof, I&apos;m born in Hamburg in August 1997 and currently based in Bremen.</p><br/>
      <p>In early 2019 I decided to quit my cultural science &amp; philosophy studies @Universität Bremen to work
          as a software developer especially for the web. 
          
          If you need a 
          secure progressive Web-App / -Site hit me up at <a href= "mailto:schoof.frederik@gmail.com" className='text-teal-300'>schoof.frederik@gmail.com</a>! I&apos;m working with mordern
          industry-leading technologies like React.js / Next.js &amp; Tailwind.css for the front-end as well as Strapi, Contentful &amp; Firestore
          for backend-purposes. The main advantages over editors like wordpress are security and speed. If you want to know more just write
          me an e-mail.
      </p>
      </div>
      {/* <div className='top-0 left-0 right-0 bottom-0 fixed -z-10 bg-black'>
        <Image 
            src={FredyImg}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit={'contain'}
            objectPosition='center'
        />
      </div> */}
    </div>
  )
}
