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
    <div key={1}>
      <Image className='z-0'
          src={Diamond}
          key={1}
          alt='1'
          placeholder="blur"
          blurDataURL={Placeholder}
          layout='fill' 
          objectFit='cover'
          objectPosition='center'
      />
    </div>,
    <div key={2}>
      <Image className='z-0'
          src={Diamond}
          key={2}
          alt='2'
          placeholder="blur"
          blurDataURL={Placeholder}
          layout='fill' 
          objectFit='cover'
          objectPosition='center'
      />
    </div>,
    // <Image className='z-0'
    //         src={Diamond}
    //         key={'2'}
    //         alt='2'
    //         placeholder="blur"
    //         blurDataURL={Placeholder}
    //         layout='fill' 
    //         objectFit='cover'
    //         objectPosition='center'
    // />,
    // <Image className='z-0'
    //         src={Diamond}
    //         key={'3'}
    //         alt='3'
    //         placeholder="blur"
    //         blurDataURL={Placeholder}
    //         layout='fill' 
    //         objectFit='cover'
    //         objectPosition='center'
    // />,
    // <Image className='z-0'
    //         src={Diamond}
    //         key={'4'}
    //         alt='4'
    //         placeholder="blur"
    //         blurDataURL={Placeholder}
    //         layout='fill' 
    //         objectFit='cover'
    //         objectPosition='center'
    // />,
    // <Image className='z-0'
    //         src={Diamond}
    //         key={'5'}
    //         alt='5'
    //         placeholder="blur"
    //         blurDataURL={Placeholder}
    //         layout='fill' 
    //         objectFit='cover'
    //         objectPosition='center'
    // />
  ]
}