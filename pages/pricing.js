import React, { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import PricingCard from '../components/PricingCard'

export default function Pricing({ screenHeight }) {
  const [price, setprice] = useState(0)
  const setPrice = val => {
      console.log('price', price)
      setprice(price + val)
  }
  
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
      console.log('sectionsData', sectionsData)
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
    let body = `Option: ${data.title}; Price-prediction: ${price && price}€; Features: ${toggleData && Object.entries(toggleData).length != 0 && Object.keys(toggleData)}; Pages: ${sectionsData && sectionsData[0]};`
    return body
  }

  return <>
    <div style={{ minHeight: screenHeight -80 }} className={`pb-4`}>
      <PageTitle title={'Pricing'}/>
      <div className='w-[375px] sm:w-[640px] sm:shadow-big rounded-3xl mx-auto my-8 mt-0 sm:mt-6 py-6'>
        <PricingCard data={data} price={price} setToggleData={setToggleData} setSectionsData={setSectionsData}/>
        <div className={`flex items-center justify-center scale-105 w-80 sm:scale-100 sm:w-10/12 my-6 text-black rounded-3xl bg-white bg-opacity-80 ring-2 ring-cyan-300 border-4 border-transparent shadow-5xl mx-auto mt-0 px-4 py-2`}>
          <ul style={{ listStyleType: 'circle' }} className='mx-4'>
              <li className='font-light'>Add or remove features &amp; pages</li>
              <li className='font-light'>Hit &apos;Send Request&apos; to send me an e-mail and receive a personal offer</li>
              <li className='font-light'>Please provide additional information about what kind of Web-App you&apos;re looking for as well as your <span className='font-bold'>design wishes</span></li>
              {/* <li className='font-light'>The calculated price is just a prediction and can vary depending on individual requirements</li> */}
              {/* <li className='font-light'>If you have any questions just send me an e-mail to <a href={`mailto:schoof.frederik@gmail.com?subject=Web-App`}>schoof.frederik@gmail.com</a></li> */}
          </ul>
        </div>
        <a href={`mailto:schoof.frederik@gmail.com?subject=Web-App Request&body=${getEmailBody()}`}>
            <div className={`text-xl bg-lime-400 hover:bg-lime-300
                shadow-3xl hover:shadow-none rounded-3xl duration-300
                px-4 py-2 mx-auto mb-0
                text-black font-bold 
                w-72 h-12 flex items-center justify-center`}>
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
  extras: [['Install-Function', 100], ['Comment-Function', 150], ['Like-System', 150], ['User-Authentication', 300], ['Individual Logo', 150]],
  sections: ['Pages / Sections', 1, 100],
  price: 349,
}
