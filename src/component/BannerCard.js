import React from 'react'

const BannerCard = ({ item }) => {
  return (
    <li className='banner-card'>
      <p>
        {item.rupeeSign && <>&#8377;</>}{item.number}
      </p>
      <p>{item.title}</p>
    </li>
  )
}

export default BannerCard
