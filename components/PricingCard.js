import React, { useEffect, useState } from 'react'
import { BsCheck2, BsDash, BsInfoCircle, BsX } from 'react-icons/bs'
import PricingInfo from './PricingInfo'

export default function PricingCard({ data, price, setToggleData, setSectionsData }) {
    const [isCardInfo, setisCardInfo] = useState(false)
    const [isAnimationInfo, setisAnimationInfo] = useState(true)
    useEffect(() => {
        setisCardInfo(false)
        setisAnimationInfo(true)
    }, [])
    
    return <>
        <div className={` bg-black backdrop bg-opacity-50 ring-black/70 ${isCardInfo ? 'border-lime-200' : 'border-lime-300'}
                shadow-5xl text-white mx-auto
                overflow-hidden border ring-2 duration-300 rounded-3xl w-[356px] sm:w-96 py-4
            `}
            >
            <div onClick={() => { setisCardInfo(!isCardInfo); setisAnimationInfo(false) }}
                className={`
                    ${isCardInfo ? 
                        'hover:text-red-600 text-red-800 active:shadow-answers-inner' 
                        : `${isAnimationInfo && 'animate-pulse hover:animate-none'} 
                            hover:bg-lime-100 bg-lime-300 text-black shadow-answers active:shadow-none
                        `}
                    duration-300 rounded-full ml-4 w-8 h-8 group flex justify-center items-center
                    overflow-hidden cursor-pointer
                `}>
                {!isCardInfo ? <BsInfoCircle size={24} className={'scale-[1.15]'}/> : <BsX size={24} />}
            </div>
            <PricingInfo isCardInfo={isCardInfo}/>
            <div className={`text-3xl sm:text-4xl font-cursive font-bold text-center -mt-9`}>{data.title}</div>
            <div className={`mb-0 sm:mb-3`}><div className={`text-center text-lg sm:text-xl font-light`}>{data.types}</div></div>
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
            <div className={`text-xl sm:text-2xl font-bold text-center mb-0 sm:mb-2`}>{data.sections[0]}</div>
            <AddSections setSectionsData={setSectionsData} sections={data.sections}/>
            <div className={`mx-auto text-3xl font-bold w-36 sm:w-40 mt-0 sm:mt-2 py-1 rounded-3xl text-center text-black bg-lime-400`}>
                {price}€
            </div>
        </div>
    </>
}

const UpperSection = ({ title, children }) => <>
    <div className={`mb-1 sm:mb-3`}>
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
            className={`group flex py-1.5 px-4 items-center justify-start cursor-pointer hover:bg-white/10`}
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
                            <BsX size={26} />
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
    return <div className={`center w-32 py-1 mx-auto justify-between mb-1 sm:mb-3`}>
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
