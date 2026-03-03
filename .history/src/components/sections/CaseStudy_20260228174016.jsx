import React from 'react'
import CaseStudyImageBG from '../../assets/images/about.jpg'

function CaseStudy() {
  return (
    <div>
      <div>
        <div>
          <img src={CaseStudyImageBG} alt="" />
        </div>
        <div>
          <h1>
            Why Acme Inc chose Aetherfield
          </h1>
          <p>
            Acme Inc chose Aetherfield because of its innovative approach to sustainable design and its commitment to using the latest technology to reduce carbon emissions. Aetherfield's expertise in the field, coupled with its focus on customer satisfaction, made it the perfect choice for Acme Inc's needs.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default CaseStudy
