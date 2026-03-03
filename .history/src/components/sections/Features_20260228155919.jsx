import React from 'react'
import FeatureImage from '../../assets/images/Feature.jpg'



const Features = () => {
  return (
    <div className='px-120 py-20 bg-white flex flex-col items-center justify-center'>
      <h1 className='text-3xl md:text-4xl font-bold text-center'>Everything you need to measure, model, and act on sustainability</h1>
      <div className='flex flex-col items-center justify-center mt-10'>
        <div>
          <img src={FeatureImage} alt='Feature 1' />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Features
