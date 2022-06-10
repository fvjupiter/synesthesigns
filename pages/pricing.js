import React, { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import PricingCard from '../components/PricingCard'

export default function Pricing({ screen }) {
  const [price, setprice] = useState(0)
  const setPrice = val => setprice(price + val)
  
  const [toggleData, settoggleData] = useState({})
  const setToggleData = (key, val) => {
      console.log('toggleData:', toggleData)
      setPrice(val)
      if(val < 0){
          let toggleDataCopy = Object.assign({},{ ...toggleData })
          delete toggleDataCopy[key]
      } else settoggleData({
          ...toggleData,
          [key]: val > 0 ? val : 0
      })
  }
  const [sectionsData, setsectionsData] = useState([])
  const setSectionsData = (amount, val) => {
      setPrice(val)
      setsectionsData([amount, amount * val])
  }

  useEffect(() => {
      let newPrice = {}
      let newToggleData = {}
      let newSectionsData = []
      newPrice = data.price
      newSectionsData = [data.sections[1], data.sections[1] * data.sections[2]] // amount, amount * price / section

      setprice(newPrice)
      settoggleData(newToggleData)
      setsectionsData(newSectionsData)
  }, [])

  const getEmailBody = () => {
    return `Option: ${data.title}; Price-prediction: ${price && price}€; Features: ${toggleData && Object.entries(toggleData).length != 0 && Object.keys(toggleData)}; Pages: ${sectionsData && sectionsData[0]};`
  }

  return <>
    <div style={{ minHeight: screen.height -80 }} className={`pb-4`}>
      <PageTitle title={'Calculator'}/>
      {/* sm:shadow-big */}
      <div className='rounded-3xl mx-auto mt-6'>
        <PricingCard data={data} price={price} setToggleData={setToggleData} setSectionsData={setSectionsData}/>
        <a href={`mailto:schoof.frederik@gmail.com?subject=Web-App Request&body=${getEmailBody()}`}>
            <div className={`scale-[1] mt-4 sm:mt-6 text-xl bg-lime-400 hover:bg-lime-200
                shadow-3xl hover:shadow-none rounded-3xl duration-300
                px-4 py-2 mx-auto sm:mb-2
                text-black font-bold 
                w-72 flex items-center justify-center`}>
                <div className='font-medium'>Send Request</div>
            </div>
        </a>
      </div>
    </div>
  </>
}

const data = {
  title: 'Web-App',
  types: ['(Homepage, Portfolio, Blog)'],
  included: ['Individual Design', 'Mobile & Desktop Version', 'Content-Management-System'],
  extras: [
    ['Install-Function', 200], 
    ['User-Authentication (Log-in)', 200], 
    ['Comment-Function', 200], 
    ['Post-Feed-Like-System', 400],
    ['Individual Logo', 150]
  ],
  sections: ['Pages / Sections', 1, 100],
  price: 349,
}
