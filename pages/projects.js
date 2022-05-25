import React from 'react'
import Image from 'next/image'
import PreviewSlide from '../components/PreviewSlide'
import Diamond from '../public/diamond.jpg'
import Peter from '../public/project-images/peter.png'
import Undercover from '../public/project-images/undercover.png'
import Mindfunction from '../public/project-images/mindfunction.png'
import Mathgame from '../public/project-images/mathgame.png'

export default function Projects({ screen }) {
  return <>
    <div style={{ minHeight: screen.height -80 }} className='no-select'>
      <PreviewSlide data={templateData} screen={screen}/>
    </div>
  </>
}

const templateData = {
  titleArr: [
    ['Portfolio - Peter', 'https://portfolio-pp.vercel.app/'], 
    ['Undercover Game', 'http://undercover.sup2fredy.com/'], 
    ['Mindfunction-Test', 'http://mindfunction-test.sup2fredy.com/'], 
    ['Mathgame', 'http://mathgame.sup2fredy.com/'], 
    ['Community']
  ],
  boxList: [
    <Image className='z-0'
        src={Peter}
        key={'0'}
        alt='0'
        placeholder="blur"
        layout='fill' 
        objectFit='cover'
        objectPosition='center'
    />,
    <Image className='z-0'
            src={Undercover}
            key={'1'}
            alt='1'
            placeholder="blur"
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Mindfunction}
            key={'2'}
            alt='2'
            placeholder="blur"
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />,
    <Image className='z-0'
            src={Mathgame}
            key={'3'}
            alt='3'
            placeholder="blur"
            layout='fill' 
            objectFit='cover'
            objectPosition='center'
    />
  ]
}
