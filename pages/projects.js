import React from 'react'
import Image from 'next/image'
import PreviewSlide from '../components/PreviewSlide'
import Diamond from '../public/diamond.jpg'
import Placeholder from '../public/imgPlaceholder.gif'

export default function Projects({ screenHeight, screenWidth }) {
  return <>
    <div style={{ minHeight: screenHeight -80 }}>
      <PreviewSlide data={templateData} screen={{ height: screenHeight, width: screenWidth }}/>
    </div>
  </>
}

const templateData = {
  titleArr: ['Portfolio', 'Blog', 'Company', 'Shop', 'Community'],
  boxList: [
    <Image className='z-0'
        src={Diamond}
        placeholder="blur"
        blurDataURL={Placeholder}
        layout='fill' 
        objectFit='cover'
        objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />
  ]
}