import React from 'react'
import ValueImageBG from '../../assets/images/Value section.jpg'



function ValueSection() {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${ValueImageBG})` }}>
      <div className='text-white p-10 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Built for clarity</h1>
        <h1 className='text-2xl'>Built for clarity</h1>
      </div>
    </div>
  )
}

export default ValueSection
