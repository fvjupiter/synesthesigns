import React from 'react'
import Link from 'next/link'

export default function TopBar({ id, navItems}) {
  return (
    <div className='h-12 sm:h-20 w-screen fixed top-0 z-30 flex justify-center bg-black bg-opacity-50 backdrop shadow-3xl'>
        <div className='center h-full w-fit'>
            <div className='flex justify-center w-5/12 h-full'>
                {navItems.map((item, index) => (
                    <Link key={index} href={item[1]}>
                        <a>
                            <div key={index} className={`group center h-full text-white p-1 sm:p-2 w-[90px] sm:w-40 cursor-pointer`}>
                                <div className={`center text-center w-full h-full font-sans
                                    text-sm sm:text-2xl font-extralight ${id == index ? 'text-white' : 'text-gray-300 group-hover:text-gray-100'}
                                    group-hover:bg-opacity-10 bg-white bg-opacity-0 duration-100 
                                    rounded-lg`}>
                                    {item[0]}
                                </div>
                            </div>
                            <div className={`${item[2]} rounded-3xl h-0.5 ${id == index ? 'w-[90px] sm:w-40' : 'w-0 ring-0'} duration-300 mx-auto`}/>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
