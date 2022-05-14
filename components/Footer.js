import React from 'react'

export default function Footer() {
  return (
    <div className='h-16 relative bottom-0 z-10 bg-gradient-to-t from-black to-black/50 w-screen border-t border-t-black text-white flex items-center justify-center'>
        <div>
            <div className='text-xs sm:text-sm font-bold text-gray-400'>© 2022 Frederik Schoof. All Rights Reserved.</div>
            {/* <div className='text-xs font-extralight'>
                <div>schoof.frederik@gmail.com</div>
                <div>+49 176 617 570 15</div>
            </div> */}
        </div>
    </div>
  )
}
