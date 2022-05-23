import React, { useEffect, useState } from 'react'
import { BsCheck2, BsDash, BsInfoCircle, BsX } from 'react-icons/bs'

export default function PricingCard({ data, price, setToggleData, setSectionsData }) {
    const [isCardInfo, setisCardInfo] = useState(false)
    useEffect(() => setisCardInfo(false), [])
    return <>
        <div className={`scale-110 sm:scale-[1.25] bg-black backdrop bg-opacity-50 ring-black/70 ${isCardInfo ? 'border-lime-200' : 'border-lime-300'}
                shadow-5xl text-white mx-auto
                overflow-hidden border ring-2 duration-300 rounded-3xl h-[550px] w-80 py-4 m-2 mt-8 sm:mt-10
            `}
            >
                <div onClick={() => setisCardInfo(!isCardInfo)}
                    className={`
                        ${isCardInfo ? 'hover:text-red-600 text-red-800 active:shadow-answers-inner' : 'hover:bg-lime-100 bg-lime-300 text-black shadow-answers active:shadow-none'}
                        duration-300 rounded-full ml-4 w-6 h-6 group flex justify-center items-center
                        overflow-hidden cursor-pointer
                    `}>
                    {!isCardInfo ? <BsInfoCircle size={24} className={'scale-[1.15]'}/> : <BsX size={24} />}
                </div>
                <div className={`${isCardInfo ? `h-[544px] overflow-scroll pb-20` : `h-0 overflow-hidden`}
                    w-full px-4 duration-300 ease-in-out z-20 rounded-2xl text-justify text-sm font-light
                    `}>
                        A <span className='font-bold'>Web-App</span> is basically a Website which preloads and stores the single pages, 
                        so it can behave like a desktop or mobile app.<br/><br/>
                        <ul className='px-4'>
                            <li className='font-light list-decimal'>Add or remove <span className='font-bold'>features &amp; pages</span></li>
                            <li className='font-light list-decimal'>A page / section is an area on the Web-App e.g. <span className='font-bold'>Home</span>, <span className='font-bold'>About</span> or an <span className='font-bold'>Image-Gallery</span></li>
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
                <div className={`text-3xl font-cursive font-bold text-center -mt-5`}>{data.title}</div>
                <div className={`mb-2`}><div className={`text-center font-medium`}>{data.types}</div></div>
                <UpperSection title={'Included'} height={'h-32 px-4'}>
                    {data.included.map((title, ind) => (
                        <div key={ind} className={`flex py-1 items-center justify-start`}>
                            {getCheckedBox(true)}
                            <div className='ml-2 font-light'>{title}</div>
                        </div>
                    ))}
                </UpperSection>
                <UpperSection title={'Add Features'} height={'h-48'}>
                    {data.extras.map((arr, ind) => (
                        <ExtraToggle key={ind} arr={arr} setToggleData={setToggleData}/>
                    ))}
                </UpperSection>
                <div className={`text-xl font-bold text-center`}>{data.sections[0]}</div>
                <AddSections setSectionsData={setSectionsData} sections={data.sections}/>
                <div className={`mx-auto relative text-3xl font-bold w-32 inset-x-1/2 -ml-16 mt-2 px-4 py-2 rounded-3xl text-center text-black bg-lime-400`}>
                    {price}€
                </div>
        </div>
    </>
}

const UpperSection = ({ title, height, children }) => <>
    <div className={`${height}`}>
        <div className={`text-xl font-semibold text-center`}
            >{title}
        </div>
        {children}
    </div>
</>

const getCheckedBox = isCheck => <>
    <div className={`h-6 w-6 ${isCheck ? 'opacity-100 bg-lime-300' : 'opacity-30 bg-gray-300'} 
      text-black rounded-full flex items-center justify-center duration-300`}
        >
            <BsCheck2 size={20} />
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
            className={`group flex py-1 items-center justify-start cursor-pointer hover:bg-white/10 px-4`}
            >
            {getCheckedBox(isActive)}
            <div className={`ml-2 flex justify-between w-64`}>
                <div className='font-light'>{arr[0]}</div>
                <div className={`
                    ${isActive ? 'bg-opacity-0' 
                    : 'group-hover:bg-lime-100 bg-lime-300 shadow-answers group-active:shadow-none'} 
                    duration-300 flex items-center justify-center rounded-full`}
                    >
                    <div className={`${isActive ? 'rotate-0' : '-rotate-45'} 
                        ${isActive ? 'group-hover:text-red-600 text-red-800' : 'text-black'} 
                        duration-300`}
                        >
                            <BsX size={24} />
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
    return <div className={`center w-24 py-1 mx-auto justify-between`}>
        <div onClick={() => { if(amount > sections[1]) setData(false) }}
            className={`${amount > sections[1] ? `hover:bg-red-100 active:shadow-none bg-red-300 shadow-answers cursor-pointer` 
                : 'opacity-30 bg-gray-300'}
                center duration-300 rounded-full`}>
            <div className={`text-black duration-300`}>
                <BsDash size={24} />
            </div>
        </div>
        <div className='text-xl font-bold'>{amount}</div>
        <div onClick={() => { if(amount < (sections[3] ? sections[3] : 99))  setData(true) }}
            className={`${amount < (sections[3] ? sections[3] : 99) ? `hover:bg-lime-100 active:shadow-none bg-lime-300 shadow-answers cursor-pointer`
                : 'opacity-30 bg-gray-300'}
                duration-300 center rounded-full`}>
            <div className={`-rotate-45 text-black duration-300`}>
                <BsX size={24} />
            </div>
        </div>
    </div>
}
