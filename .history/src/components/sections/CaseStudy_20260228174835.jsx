import React from 'react'
import CaseStudyImageBG from '../../assets/images/about.jpg'

function CaseStudy() {
  return (
    <div className="px-100 py-20 bg-color-white-500" >
      <div className='bg-color-[#F6F8FB] border-radius-16 '>
        <div>
          <img src={CaseStudyImageBG} alt="" />
        </div>
        <div>
          <h1>
            Why Acme Inc chose Aetherfield
          </h1>
          <p>
            With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.
          </p>
          <button>Read case study</button>
        </div>
      </div>
      
    </div>
  )
}

export default CaseStudy
