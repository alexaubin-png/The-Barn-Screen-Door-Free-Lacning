import React from 'react'
import './About.css'
import ourMission from '../assests/mission.png'
import HeroSectionImg from '../assests/vermont.jpg'
import whoWeAre from '../assests/working.png'
export default function About() {
  return (
    <>
      <section className='about-hero-section'>
        <img className='vermont-image' src={HeroSectionImg}></img>
        <h2 className='hero-header'>#Know About Us</h2>
        <p className='hero-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </section>

      <section id='about-head' className='about-text'>
          <img className='whoweare-image' src={whoWeAre} alt='who-we-are-image' />
        <div className="about-content">
        <h2 className='about-header'>Who we are</h2>
      
      Here at The Barn Screen Door, you can place reasonably sized orders according to the items available. This company is a one man operation from a shop in saint albans and still manages to provide products to trusted local buissness, like skate parks, athletes, and more. We also can provide product to indivudal customers that just want one item. We are quality orientated and put in effort to gaurntee the best product available... Thank you!!!

        </div>
      
        </section>
        <section className='mission-article'>
        <img className='mountain-img' src={ourMission}></img>
        <div className="about-text">
        <h2 className='Mission-Header'>Our mission</h2>
        Our mission is to provide quality, comfortable, and affordable clothing products to our customers. We strive to create a place where every customer can feel comfortable and secure, and we believe that every item should be a good fit. We also want to make sure that our customers feel heard and valued. Every single item is hand sitched together, which is very impressive and rare to find. Note that we do offer hoodies but the default hoodies come from a wholesaller that means they're not stiched by hand.
        </div>
        
    
        </section>
    </>
  )
}
