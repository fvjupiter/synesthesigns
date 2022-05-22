import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    // <div className='h-16 relative bottom-0 z-10 bg-gradient-to-t from-black to-black/50 w-screen border-t border-t-black text-white flex items-center justify-center'>
    //     <div>
    //         <div className='text-xs sm:text-sm font-bold text-gray-400'>© 2022 Frederik Schoof. All Rights Reserved.</div>
    //         {/* <div className='text-xs font-extralight'>
    //             <div>schoof.frederik@gmail.com</div>
    //             <div>+49 176 617 570 15</div>
    //         </div> */}
    //     </div>
    // </div>
    <div className='h-40 relative bottom-0 z-10 bg-black w-screen border-t border-t-black text-white flex items-center justify-center'>
        <div className='text-xs sm:text-lg font-bold text-gray-400 text-center'>
            <Social />
            <div>© 2022 All Rights Reserved.</div>
            <div>Powered by <a className='cursor-pointer font-medium synesthesigns' href="https://portfolio-fvjupiter.vercel.app/" rel="noreferrer" target='_blank'>Synesthesigns</a>.</div>
        </div>
    </div>
  )
}
