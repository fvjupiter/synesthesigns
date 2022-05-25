import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <div className='center h-40 w-screen relative z-10 text-white bg-black border-t border-t-black'>
        <div className='sm:text-lg text-gray-400 text-center'>
            <Social />
            <div className='font-medium'>© 2022 All Rights Reserved.</div>
            <div className='font-medium'>Powered by &nbsp;
              <a className='cursor-pointer font-medium synesthesigns' 
                href="https://portfolio-fvjupiter.vercel.app/" 
                rel="noreferrer" 
                target='_blank'>
                  Synesthesigns
                </a>.
              </div>
        </div>
    </div>
  )
}
