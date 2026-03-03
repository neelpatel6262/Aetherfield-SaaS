import React from 'react'
import ValueImageBG from '../../assets/images/Value section.jpg'



function ValueSection() {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${ValueImageBG})` }}>
      <div className='text-white p-10 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>The Value of Our Solutions</h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      </div>
    </div>
  )
}

export default ValueSection
