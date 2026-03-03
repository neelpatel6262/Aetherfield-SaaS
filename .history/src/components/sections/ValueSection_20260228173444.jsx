import React from 'react'
import ValueImageBG from '../../assets/images/Values section.jpg'



function ValueSection() {
  return (
    <div className='bg-cover bg-center h-screen bg-[url(ValueImageBG)] bg-no-repeat bg-fixed'>
      <img src={ValueImageBG} alt="Values section" className='w-full h-full object-cover' />
      <div className='text-white p-10 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Built for clarity</h1>
        <h1 className='text-2xl font-bold'>Designed for action</h1>
      </div>
    </div>
  )
}

export default ValueSection
