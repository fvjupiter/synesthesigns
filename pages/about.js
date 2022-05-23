import React from 'react'

export default function About({ screen }) {
  return (
    <div style={{ minHeight: screen.height -80 }} className={``}>
      <div 
        style={{ marginTop: screen.height -200 }} 
        className={`backdrop w-11/12 mx-auto sm:w-[620px] md:w-[748px] 
          px-7 py-5 md:px-8 md:py-6 lg:py-8 lg:px-12 
          md:text-2xl sm:text-xl text-base lg:text-3xl text-justify text-white
          border border-pink-400 rounded-3xl ring-4 bg-black bg-opacity-70 
          `}>
      <p>My name is Frederik Schoof, I&apos;m born in Hamburg in August 1997 and currently based in Bremen.</p><br/>
      <p>In early 2019 I decided to quit my cultural science &amp; philosophy studies @Universität Bremen to work
          as a software developer especially for the web. 
          
          If you need a 
          secure progressive Web-App / -Site hit me up 
          at <a href= "mailto:schoof.frederik@gmail.com" className='text-blue-300'>schoof.frederik@gmail.com</a>! I&apos;m working with mordern
          industry-leading technologies like React.js / Next.js &amp; Tailwind.css for the front-end as well as Strapi, Contentful &amp; Firestore
          for backend-purposes. The main advantages over editors like wordpress are security and speed. If you want to know more just write
          me an e-mail.
      </p>
      </div>
    </div>
  )
}
