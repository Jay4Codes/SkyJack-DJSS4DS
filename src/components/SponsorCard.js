import React from 'react'
import './Sponsor.css'

function SponsorCard(props) {
  return (
    <div className='sponsor-card'>
        <img src={props.img} alt="sponsor" className='sponsor-img' />
        <span className='sponsor-text-1'>
          {props.tag}
        </span>
    </div>
  )
}

export default SponsorCard