import React,{ useEffect, useState } from 'react'
import Slide from './Slide'
import PageTitle from './PageTitle'
import { useRouter } from 'next/router'

export default function PreviewSlide({ data, screen }) {
    const router = useRouter()
    const [boxId, setboxId] = useState(0)
    const [circleIdHover, setcircleIdHover] = useState(-1)
    const [circlesHover, setcirclesHover] = useState(false)
    const [isBoxChosen, setisBoxChosen] = useState(true)
    useEffect(() => { 
        if(isBoxChosen)setcirclesHover(false)
    }, [isBoxChosen])

    const screenSizes = { sm: 640, md: 768, lg: 1024, xl: 1280, xl2: 1536 }
    const width = screen.width >= screenSizes.md ? screen.width * 0.6 : screen.width + 20
    const height = width * 0.6
    
    const getButton = ({ title, clickHandle, classN }) => (
        <div key={title}
            onClick={isBoxChosen ? clickHandle : null}
            className={`${classN} ${isBoxChosen ? 'hover:text-white text-gray-300 cursor-pointer active:shadow-inner-xl hover:bg-opacity-20 active:bg-opacity-0' 
                : 'text-gray-600'} 
                font-light
                center h-full w-1/2
                text-md sm:text-xl lg:text-2xl overflow-hidden
                border-4 border-black rounded-3xl
                duration-300
                bg-black
                bg-opacity-70
            `}
            >{title}
        </div>
    )

    const getCircles = () => <div className={`text-center`}>
            <div className='justify-center flex'>
                <div
                    onMouseEnter={() => setcirclesHover(true) } 
                    onMouseLeave={() => setcirclesHover(false) }
                    className={`flex justify-center ${isBoxChosen ? 'mb-4' : 'mb-5'} mt-3 sm:mt-1 md:mt-2 xl:mt-1`}
                    >
                    {data.boxList.map((circle, index) => (
                        <div key={index}
                            onClick={() => { setboxId(index); setisBoxChosen(true) }} 
                            onMouseEnter={() => { setcircleIdHover(index); setcirclesHover(true) }} 
                            className={`group max-w-fit ${(boxId != index || !isBoxChosen) && 'cursor-pointer'}`}
                            >
                            <div 
                                className={`${boxId == index && isBoxChosen ? 'bg-white' 
                                    : `bg-black group-hover:bg-opacity-60 group-hover:bg-white bg-opacity-80 group-active:bg-opacity-40
                                    group-active:shadow-answers-inner group-hover:shadow-none shadow-3xl`} 
                                    ring-2 duration-300 rounded-full group
                                    ${isBoxChosen ? 'h-6 w-6' : 'h-8 w-8'} mx-1`}
                            />
                        </div>
                    ))}
                </div>
            </div>
    </div>
    
    return <>
        <PageTitle 
            title={
                circlesHover && !isBoxChosen ? (data.titleArr[circleIdHover] && data.titleArr[circleIdHover][0] ? data.titleArr[circleIdHover][0] : 'Example')
                : data.titleArr[boxId] ? data.titleArr[boxId][0] : 'Example'
            } 
            classN={`${isBoxChosen ? 'opacity-100' : circlesHover ? 'opacity-60' : 'opacity-0'}`}
        />
        <div style={{ height: height }}
            className={`w-screen relative flex justify-center overflow-hidden duration-300 mt-4 sm:mt-3 lg:mt-0`}>
            <Slide 
                boxList={data.boxList}
                currentBoxId={boxId}
                boxIdHandler={setboxId}
                isBox_chosen={isBoxChosen}
                isBoxChosenHandler={setisBoxChosen}
                height={height}
                width={width}
                isDirectScroll
                // scale_norm={0.93}
                borderRadius_click={24}
                borderRadius_norm={24}
            />
        </div>
        <div className='w-full relative pb-8'>
            {getCircles()}
            <div style={{ width: width * 0.6, }}
                className={`${isBoxChosen ? 'opacity-100' : 'opacity-0'}
                    scale-[0.94] mx-auto w-full h-12 lg:h-14 xl:h-16 center
                    ring-2 ring-gray-600 rounded-3xl overflow-hidden duration-300`}
                >
                {getButton({ title:'Demo', clickHandle: () => window.open(data.titleArr[boxId][1], '_blank').focus(), classN:'border-r-0 rounded-r-none'})}
                {getButton({ title: 'Pricing', clickHandle: () => router.push(`pricing`), classN:'border-l-0 rounded-l-none'})}
            </div>
        </div>
    </>
}
