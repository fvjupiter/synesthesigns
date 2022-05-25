import React from 'react'
import Image from 'next/image'
import Hacker from '../public/hacker.jpg'
import Diamond from '../public/diamond.jpg'
import Blockchain from '../public/blockchain.jpg'
import FredyImg from '../public/fredy.jpeg'
import BlueOrangeSpiral from '../public/blueOrangeSpiral.jpg'

export default function Background({ asPath }) {
  return <>
    <div className='top-0 left-0 h-screen w-screen fixed z-0 bg-black'>
        {
        asPath == '/pricing' ? <>
            <Image 
                src={Diamond}
                placeholder="blur"
                layout='fill' 
                objectFit={'cover'}
                objectPosition='center'
            />
        </>
        : asPath == '/projects' ? <>
            <Image 
                src={Blockchain}
                placeholder="blur"
                layout='fill' 
                objectFit={'cover'}
                objectPosition='center'
            />
            <div className={`top-0 left-0 right-0 bottom-0 absolute z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80`}/>
        </>
        : asPath == '/about' ?
            <Image 
                src={FredyImg}
                placeholder="blur"
                layout='fill' 
                objectFit={'contain'}
                objectPosition='center'
            />
        : <>
            <Image 
                priority
                src={Hacker}
                placeholder="blur"
                layout='fill' 
                objectFit={'cover'}
                objectPosition='center'
            />
        </>
        }
    </div>
  </>
}
