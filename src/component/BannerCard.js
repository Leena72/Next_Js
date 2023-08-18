import React from 'react'

const BannerCard = ({ customerData }) => {
  return (
    <div className='banner-card'>
      <p>
        {false && <>&#8377;</>}{customerData}
      </p>
      <p>{'Policy Term(In Year)'}</p>
    </div>
  )
}

export default BannerCard
