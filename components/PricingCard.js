import React, { useEffect, useRef, useState } from 'react'
import { BsCheck2, BsDash, BsInfoCircle, BsX } from 'react-icons/bs'

export default function PricingCard({ data, price, setToggleData, setSectionsData }) {
    const [isCardInfo, setisCardInfo] = useState(false)
    const [infoHeight, setinfoHeight] = useState(0)
    const infoRef = useRef()
    useEffect(() => {
        setisCardInfo(false)
        setinfoHeight(infoRef.current.clientHeight)
    }, [])
    
    return <>
        <div className={` bg-black backdrop bg-opacity-50 ring-black/70 ${isCardInfo ? 'border-lime-200' : 'border-lime-300'}
                shadow-5xl text-white mx-auto
                overflow-hidden border ring-2 duration-300 rounded-3xl w-[356px] sm:w-96 py-4
            `}
            >
                <div onClick={() => setisCardInfo(!isCardInfo)}
                    className={`
                        ${isCardInfo ? 'hover:text-red-600 text-red-800 active:shadow-answers-inner' : 'hover:bg-lime-100 bg-lime-300 text-black shadow-answers active:shadow-none'}
                        duration-300 rounded-full ml-4 w-8 h-8 group flex justify-center items-center
                        overflow-hidden cursor-pointer
                    `}>
                    {!isCardInfo ? <BsInfoCircle size={24} className={'scale-[1.15]'}/> : <BsX size={24} />}
                </div>
                <div style={{ height: isCardInfo ? infoHeight : 0 }}
                    className={`${isCardInfo && `mb-32`} overflow-hidden
                    w-full px-4 duration-500 ease-in-out z-20 rounded-2xl text-justify text-md sm:text-lg
                    `}>
                        <div ref={infoRef} className='font-light'>
                            A <span className='font-bold'>Web-App</span> is basically a Website which preloads and stores the single pages, 
                            so it can behave like a desktop or mobile app.<br/><br/>
                            <ul className='px-4'>
                                <li className='font-light list-decimal'>Add or remove <span className='font-bold'>features &amp; pages</span> (a page / section is an area on the Web-App e.g. <span className='font-bold'>Home</span>, <span className='font-bold'>About</span> or an <span className='font-bold'>Image-Gallery</span>)</li>
                                <li className='font-light list-decimal'>The price is a prediction and can vary based on your requirements</li>
                                <li className='font-light list-decimal'>Hit <span className='font-bold'>Send Request</span> to send me an e-mail and receive a <span className='font-bold'>personal offer</span></li>
                                <li className='font-light list-decimal'>Please provide additional information about what kind of Web-App you&apos;re looking for as well as your <span className='font-bold'>design wishes</span></li>
                                
                            </ul><br/>
                            <span className='font-bold'>Content-Management-System (CMS):</span><br/>
                            You can manage all your
                            content by yourself without writing one line of code. The Web-App will be updated
                            automatically.<br/><br/>
                            <span className='font-bold'>Install-Function:</span><br/>
                            Your Web-App will be installable on Smartphones
                            and PC&apos;s which means that your users can use your App offline, directly
                            accessable through their Homescreen. The App will be updated in the background
                            if you change the content.<br/><br/>
                            <span className='font-bold'>User-Authentication:</span><br/> Users will be able to log-in to your Web-App to e.g. save,
                            comment and like your posts.<br/><br/>
                            <span className='font-bold'>Individual Logo:</span><br/>
                            Creation of your custom logo by <a 
                                href="https://portfolio-fvjupiter.vercel.app/" 
                                rel="noreferrer" 
                                target='_blank' 
                                className='font-medium text-lime-300 hover:text-lime-100 active:text-cyan-400 cursor-pointer'>
                                    IM3K - Designs
                            </a>


                        </div>
                </div>
                <div className={`text-3xl sm:text-4xl font-cursive font-bold text-center -mt-9`}>{data.title}</div>
                <div className={`mb-3`}><div className={`text-center text-lg sm:text-xl font-light`}>{data.types}</div></div>
                <UpperSection title={'Included'}>
                    {data.included.map((title, ind) => (
                        <div key={ind} className={`flex py-1 px-4 items-center justify-start`}>
                            {getCheckedBox(true)}
                            <div className='ml-4 text-md sm:text-lg font-light'>{title}</div>
                        </div>
                    ))}
                </UpperSection>
                <UpperSection title={'Add Features'}>
                    {data.extras.map((arr, ind) => (
                        <ExtraToggle key={ind} arr={arr} setToggleData={setToggleData}/>
                    ))}
                </UpperSection>
                <div className={`text-xl sm:text-2xl font-bold text-center mb-2`}>{data.sections[0]}</div>
                <AddSections setSectionsData={setSectionsData} sections={data.sections}/>
                <div className={`mx-auto text-3xl font-bold w-36 sm:w-40 mt-2 py-1 rounded-3xl text-center text-black bg-lime-400`}>
                    {price}€
                </div>
        </div>
    </>
}

const UpperSection = ({ title, children }) => <>
    <div className={`mb-3`}>
        <div className={`text-xl sm:text-2xl font-semibold text-center`}
            >{title}
        </div>
        {children}
    </div>
</>

const getCheckedBox = isCheck => <>
    <div className={`w-6 h-6 sm:w-7 sm:h-7 ${isCheck ? 'opacity-100 bg-lime-300' : 'opacity-30 bg-gray-300'} 
      text-black rounded-full flex items-center justify-center duration-300 pt-0.5`}
        >
            <BsCheck2 size={24} />
    </div>
</>

const ExtraToggle = ({ arr, setToggleData }) => {
    const [isActive, setisActive] = useState(false)
    const setData = () => {
        setToggleData(arr[0], isActive ? - 1 * arr[1] : arr[1])
        setisActive(!isActive)
    }
    return <>
        <div key={'toggle'+arr[0]}
            onClick={setData}
            className={`group flex py-1 px-4 items-center justify-start cursor-pointer hover:bg-white/10`}
            >
            {getCheckedBox(isActive)}
            <div className={`ml-4 text-md sm:text-lg flex justify-between w-[310px]`}>
                <div className='font-light'>{arr[0]}</div>
                <div className={`
                    ${isActive ? 'bg-opacity-0' 
                    : 'group-hover:bg-lime-100 bg-lime-300 shadow-answers group-active:shadow-none'} 
                    duration-300 flex items-center justify-center rounded-full`}
                    >
                    <div className={`${isActive ? 'rotate-0' : '-rotate-45'} 
                        ${isActive ? 'group-hover:text-red-600 text-red-800' : 'text-black'} 
                        center w-6 h-6 sm:w-7 sm:h-7
                        duration-300`}
                        >
                            <BsX size={30} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

const AddSections = ({ setSectionsData, sections }) => {
    const [amount, setamount] = useState(sections[1])
    useEffect(() => setamount(sections[1]), [])
    const setData = isAdd => {
        setSectionsData(
            isAdd ? amount + 1 : amount - 1, 
            isAdd ? sections[2] : - 1 * sections[2]
        )
        setamount(isAdd ? amount + 1 : amount - 1)
    }
    return <div className={`center w-32 py-1 mx-auto justify-between mb-3`}>
        <div onClick={() => { if(amount > sections[1]) setData(false) }}
            className={`${amount > sections[1] ? `hover:bg-red-100 active:shadow-none bg-red-300 shadow-answers cursor-pointer` 
                : 'opacity-30 bg-gray-300'}
                w-6 h-6 sm:w-7 sm:h-7
                center duration-300 rounded-full`}>
            <div className={`text-black duration-300`}>
                <BsDash size={30} />
            </div>
        </div>
        <div className='text-2xl font-bold'>{amount}</div>
        <div onClick={() => { if(amount < (sections[3] ? sections[3] : 99))  setData(true) }}
            className={`${amount < (sections[3] ? sections[3] : 99) ? `hover:bg-lime-100 active:shadow-none bg-lime-300 shadow-answers cursor-pointer`
                : 'opacity-30 bg-gray-300'}
                
                duration-300 center rounded-full`}>
            <div className={`-rotate-45 text-black duration-300 w-6 h-6 sm:w-7 sm:h-7 center`}>
                <BsX size={30} />
            </div>
        </div>
    </div>
}
