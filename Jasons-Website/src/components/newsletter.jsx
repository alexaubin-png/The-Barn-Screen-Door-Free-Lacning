import React from 'react'
import './newsletter.css'
// import NewsletterBackground from '../assests/newsletter-background-screendoor.webp'
export default function newsletter() {
  return (
<section className='newsletter' id='newsletter'>
    <div className="newstext">
      <h4 className='news-header'>Stay Informed</h4>
      <p className='news-text'>Sign up for our newsletter to receive <span>exclusive offers and updates.</span></p>
      <div className='form2'>
        <input className='newsletter-email' type="email" placeholder="Enter your email" />
        <button className='newsletter-submit' type="submit">Subscribe</button>
      </div>
    </div>
 </section>
  )
}
