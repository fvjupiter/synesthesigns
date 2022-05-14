import React from 'react'

export default function Footer() {
  return (
    <div className='h-40 relative bottom-0 z-10 bg-gradient-to-t from-black to-black/50 w-screen border-t border-t-black text-white flex items-center justify-center'>
        <div>
            <div className='text-xl sm:text-3xl font-bold '>Frederik Schoof - 2022</div>
            <div className='font-extralight'>
                <div>schoof.frederik@gmail.com</div>
                <div>+49 176 617 570 15</div>
            </div>
        </div>
    </div>
  )
}
