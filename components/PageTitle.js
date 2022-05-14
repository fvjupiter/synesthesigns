import React from 'react'

export default function PageTitle({ title, classN }) {
    return <h1 className={`${classN} duration-300 textShadow text-4xl sm:text-5xl mx-auto text-center text-white font-medium sm:pt-6`}>{title}</h1>
}
