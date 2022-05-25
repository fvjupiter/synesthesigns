import { useRouter } from 'next/router'
import React from 'react'

export default function About({ screen }) {
  const router = useRouter()
  const A = ({ domain, children }) => <a 
    href={domain}
    rel="noreferrer" 
    target='_blank' 
    className='font-light text-blue-300 hover:text-blue-100 active:text-pink-400 cursor-pointer'>
        {children}
  </a>
  return (
    <div style={{ minHeight: screen.height -80 }} className={`no-select`}>
      <div 
        style={{ marginTop: screen.height -200 }} 
        className={`backdrop w-11/12 mx-auto sm:w-[620px] md:w-[748px] 
          px-7 py-5 md:px-8 md:py-6 lg:py-8 lg:px-12 mb-8
          md:text-2xl sm:text-xl text-base text-justify text-white font-extralight
          border border-pink-400 rounded-3xl ring-4 bg-black bg-opacity-70 
          `}>
          Hi, I&apos;m Fredy, 24 y.o., Web-Developer &amp; Musician based in Bremen, Germany. 
          Since I was a child I am interested in understanding the world, 
          solving problems and creating ideas to improve, 
          rethink and rebuild current systems. 
          Especially the human conciousness and its similarities to software, e.g. the possibility to develop 
          flexible, weightless concepts, I find pretty fascinating. 
          I made the experience that both can be (more or less) easily programmed 
          and changed to whatever you can imagine and will then take their (more or less great) impact on the world.
          <br/><br/>
          So, back in early 2019 a friend, Denis Rysavy, inspired me to have a look on coding and faster than I could go to my next courses 
          I decided to quit my cultural science &amp; philosophy studies @Universität Bremen to work
          as a software developer for the web.<br/>
          Since then I started with plain <A domain='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</A>, <A domain='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</A>, <A domain='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JS</A> in the first year 
          and build some click-games which you can find under <span onClick={() => router.push('/projects')} className={'font-light text-blue-300 hover:text-blue-100 active:text-pink-400 cursor-pointer'}>Projects</span>.
          I continued by understanding and using Frameworks such as <A domain='https://reactjs.org/'>React.js</A>, <A domain='https://nextjs.org/'>Next.js</A>, than added <A domain='https://tailwindcss.com/'>Tailwind.css</A> for faster styling
          as well as <A domain='https://www.contentful.com/'>Contentful</A>, <A domain='https://strapi.io/'>Strapi</A> and <A domain='https://firebase.google.com/products/firestore'>Firestore</A> for backend purposes to my skillset.<br/><br/>
          The use of these modern, industry-leading technologies has a lot of advantages over creating traditional Websites:<br/>
          <ul className='py-4 px-6'>
              <li className='font-light list-disc'>Faster loading times</li>
              <li className='font-light list-disc'>Improved security</li>
              <li className='font-light list-disc'>Greater stability</li>
              <li className='font-light list-disc'>Way more flexibility</li>
              <li className='font-light list-disc'>Lightweight (requires less code)</li>
              <li className='font-light list-disc'>Scalability</li>
          </ul>
          <br/><br/>
          You may ask yourself why wouldn&apos;t you just use an Editor like Wordpress and there is a simple <A domain='https://withloveinternet.com/blog/what-should-you-choose-wordpress-vs.-react-frameworks'>answer</A> to this:<br/>
          Wordpress does takes the traditional, outdated way of creating Websites and therefore suffer in terms of speed and security.
          Another aspect is, that you&apos;re bound to the design-elements and plug-ins that the editor provides which are most of the time also pretty weight-heavy. Imagine you would like to have a shuffle-button to mix the order of your photos, 
          create a custom calculator or even a simple game.<br/><br/>
          If you need a secure progressive Web-App with a great User-Experience hit me up 
          at <a href= "mailto:schoof.frederik@gmail.com" 
            className='font-light text-blue-300 hover:text-blue-100 active:text-pink-400 cursor-pointer'>schoof.frederik@gmail.com</a>.
          For further information just write me an e-mail.
      </div>
    </div>
  )
}
