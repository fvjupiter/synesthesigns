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
    const width = screen.width >= screenSizes.sm ? screen.width * 0.6 : screen.width
    const height = width * 0.6
    
    const getButton = ({ title, clickHandle, classN }) => (
        <div 
            onClick={isBoxChosen ? clickHandle : null}
            className={`${classN} ${isBoxChosen ? 'hover:text-white text-gray-300 cursor-pointer active:shadow-inner-xl hover:bg-opacity-40 active:bg-opacity-0' 
                : 'text-gray-600'} 
                text-3xl font-light
                h-full w-1/2 flex items-center justify-center
                lg:text-xl xl:text-2xl overflow-hidden
                border-4 border-black rounded-3xl
                duration-300
                bg-black
                bg-opacity-80
            `}
            >{title}
        </div>
    )

    const getCircles = () => <div 
        className={`text-center`}
        ><div className={`flex justify-center -mt-4`}>
            <div className={` duration-200 rounded-xl textShadow px-2
                text-xs font-bold origin-bottom text-white ${circlesHover ? 'scale-100' : 'scale-0'}`}
                >{circlesHover && data.titleArr[circleIdHover] ? data.titleArr[circleIdHover] : 'Example'}
            </div>
        </div>
            <div className='justify-center flex'>
                <div
                    onMouseEnter={() => setcirclesHover(true) } 
                    onMouseLeave={() => setcirclesHover(false) }
                    className={`flex justify-center ${isBoxChosen ? 'mb-0' : 'mb-3'}`}
                >
                    {data.boxList.map((circle, index) => (
                        <div key={index}
                            onClick={() => { setboxId(index); setisBoxChosen(true) }} 
                            onMouseEnter={() => { setcircleIdHover(index); setcirclesHover(true) }} 
                            className={`group max-w-fit ${(boxId != index || !isBoxChosen) && 'cursor-pointer'} py-2`}
                            >
                            <div 
                                key={index}
                                className={`${boxId == index && isBoxChosen ? 'bg-white' 
                                    : `bg-black group-hover:bg-opacity-60 group-hover:bg-white bg-opacity-80 group-active:bg-opacity-40
                                    group-active:shadow-answers-inner group-hover:shadow-none shadow-3xl`} 
                                    ring-2 duration-300 rounded-full group
                                    ${isBoxChosen ? 'h-4 w-4' : 'h-8 w-8'} mx-1`}
                            />
                        </div>
                    ))}
                </div>
            </div>
    </div>
    
    return <>
        <PageTitle 
            title={
                circlesHover && !isBoxChosen ? (data.titleArr[circleIdHover] ? data.titleArr[circleIdHover] : 'Example')
                : data.titleArr[boxId] ? data.titleArr[boxId] : 'Example'
            } 
            classN={`${isBoxChosen ? 'opacity-100' : circlesHover ? 'opacity-30' : 'opacity-0'}`}
        />
        <div style={{ height: height }}
            className={`w-screen relative flex justify-center overflow-hidden duration-300`}>
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
                    scale-[0.94] mx-auto w-full h-12 lg:h-14 xl:h-16 flex items-center justify-center 
                    ring-2 ring-gray-600 rounded-3xl overflow-hidden duration-300`}
                >
                {getButton({ title:'Demo', clickHandle: () => router.push(`preview/${boxId}`), classN:'border-r-0 rounded-r-none'})}
                {getButton({ title: 'Pricing', clickHandle: () => router.push(`pricing`), classN:'border-l-0 rounded-l-none'})}
            </div>
        </div>
    </>
}
