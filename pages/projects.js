import React from 'react'
import Image from 'next/image'
import PreviewSlide from '../components/PreviewSlide'
import Diamond from '../public/diamond.jpg'
import Placeholder from '../public/imgPlaceholder.gif'
import Peter from '../public/project-images/peter.png'
import Undercover from '../public/project-images/undercover.png'
import Mindfunction from '../public/project-images/mindfunction.png'
import Mathgame from '../public/project-images/mathgame.png'

export default function Projects({ screenHeight, screenWidth }) {
  return <>
    <div style={{ minHeight: screenHeight -80 }}>
      <PreviewSlide data={templateData} screen={{ height: screenHeight, width: screenWidth }}/>
    </div>
  </>
}

const templateData = {
  titleArr: [['Portfolio - Peter Pflügler', 'https://portfolio-pp.vercel.app/'], ['Undercover Game', 'http://undercover.sup2fredy.com/'], ['Mindfunction-Test', 'http://mindfunction-test.sup2fredy.com/'], ['Mathgame', 'http://mathgame.sup2fredy.com/'], ['Community']],
  boxList: [
    <Image className='z-0'
        src={Peter}
        key={'0'}
        alt='0'
        placeholder="blur"
        blurDataURL={Placeholder}
        layout='fill' 
        objectFit='cover'
        objectPosition='center'
    />,
    <Image className='z-0'
            src={Undercover}
            key={'1'}
            alt='1'
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Mindfunction}
            key={'2'}
            alt='2'
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Mathgame}
            key={'3'}
            alt='3'
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            key={'4'}
            alt='4'
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Diamond}
            key={'5'}
            alt='5'
            placeholder="blur"
            blurDataURL={Placeholder}
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />
  ]
}