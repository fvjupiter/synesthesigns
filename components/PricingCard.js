import React, { useEffect, useState } from 'react'
import { BsCheck2, BsDash, BsInfoCircle, BsX } from 'react-icons/bs'

export default function PricingCard({ data, price, setToggleData, setSectionsData }) {
    const [isCardInfo, setisCardInfo] = useState(false)
    useEffect(() => setisCardInfo(false), [])
    return <>
        <div className={`scale-110 sm:scale-[1.25] bg-black backdrop bg-opacity-50 ring-lime-300 ${isCardInfo ? 'border-lime-200' : 'border-white'}
                shadow-5xl text-white mx-auto
                overflow-hidden border-4 ring-2 duration-300 rounded-3xl h-[550px] w-80 py-3 m-2 mt-8 sm:mt-12
            `}
            >
                <div onClick={() => setisCardInfo(!isCardInfo)}
                    className={`
                        ${isCardInfo ? 'hover:text-red-600 text-red-800 active:shadow-answers-inner' : 'hover:bg-lime-100 bg-lime-300 text-black shadow-answers active:shadow-none'}
                        duration-300 rounded-full ml-3 w-6 h-6 group flex justify-center items-center
                        overflow-hidden cursor-pointer
                    `}>
                    {!isCardInfo ? <BsInfoCircle size={24} className={'scale-[1.15]'}/> : <BsX size={24} />}
                </div>
                <div className={`${isCardInfo ? `h-[544px] px-4 py-2 ` : `h-0`}
                    top-0 left-0 w-full duration-300 ease-in-out z-20 overflow-hidden rounded-2xl
                    `}>info
                </div>
                <div className={`text-3xl font-cursive font-bold text-center -mt-5`}>{data.title}</div>
                <div className={`mb-2`}><div className={`text-center font-medium`}>{data.types}</div></div>
                <UpperSection title={'Included'} height={'h-32 px-3'}>
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
                <div className={`mx-auto relative text-3xl font-bold w-32 inset-x-1/2 -ml-16 mt-3 px-4 py-2 rounded-3xl text-center text-black bg-lime-400`}>
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
            className={`group flex py-1 items-center justify-start cursor-pointer hover:bg-white/10 px-3`}
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
    return <div className={`flex w-24 py-1 mx-auto items-center justify-between`}>
        <div onClick={() => { if(amount > sections[1]) setData(false) }}
            className={`${amount > sections[1] ? `hover:bg-red-100 active:shadow-none bg-red-300 shadow-answers cursor-pointer` 
                : 'opacity-30 bg-gray-300'}
                duration-300 flex items-center justify-center rounded-full`}>
            <div className={`text-black duration-300`}>
                <BsDash size={24} />
            </div>
        </div>
        <div className='text-xl font-bold'>{amount}</div>
        <div onClick={() => { if(amount < (sections[3] ? sections[3] : 99))  setData(true) }}
            className={`${amount < (sections[3] ? sections[3] : 99) ? `hover:bg-lime-100 active:shadow-none bg-lime-300 shadow-answers cursor-pointer`
                : 'opacity-30 bg-gray-300'}
                duration-300 flex items-center justify-center rounded-full`}>
            <div className={`-rotate-45 text-black duration-300`}>
                <BsX size={24} />
            </div>
        </div>
    </div>
}