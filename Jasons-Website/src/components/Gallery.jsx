import React from 'react'
import './gallery.css'
import ContentImage from '../assests/Hoodie.png'
import Custom from './HoodieCustomization.jsx'
import DealsImage from '../assests/cottonJersey.avif'

//gallery file can be used to store all clothing items
export default function Gallery() {
  return (
<>
<section className='about-hero-section'>
        <img className='Deals-Image' src={DealsImage}></img>
        <h2 className='Deals-Header'>Shop Deals Only</h2>
        <p className='Deals-Text'>Shop for exclusive deals</p>
        <button className='Deals-Button'>25% Off</button>
      </section>
      <div className="Featured">
        <h2 className='featured-header'>Our Featured</h2>
        <p className='featured-text'>These listed items are considered our best sellers and our personal favorites.</p>
        <div className='flexbox'>
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        
        </div>
    
      </div>
<Custom/>
</>

  )
}

