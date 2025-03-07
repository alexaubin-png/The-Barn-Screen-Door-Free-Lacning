import React, { useState } from 'react'
import './sproduct.css'
import DealsImage from '../assests/YIND8997.PNG'
import placeholderImage from '../assests/placeholder3revamped.png'
import placeholderImage2 from '../assests/placeholder2.avif'
import placeholderImage3 from '../assests/placeholder1.png'
import SmallImg from '../assests/Hoodie.png'
import Custom from './HoodieCustomization.jsx'

// sget main image for singlepro img class
export default function Sproduct({addToCart}) {
  // Initialize state for main image
  const [mainImage, setMainImage] = useState(SmallImg);

  // Function to handle the click event for small images
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <section className='about-hero-section'>
        <img className='Deals-Image' src={DealsImage} alt="Deals" />
        <h2 className='Deals-Header'>Shop Deals Only</h2>
        <p className='Deals-Text'>Shop for exclusive deals</p>
        <button className='Deals-Button'>25% Off</button>
      </section>

      {/* Slider + product details */}
      <section id='prodetails' className='section-p1'>
        <div className="single-pro-img">
          {/* Main Image */}
          <img width='100%' className='main-image' src={mainImage} alt="Main Product" />

          <div className='small-img-group'>
            {/* Small Images */}
            <div className="small-img-col">
              
              <img 
                src={SmallImg} 
                alt="Small Image 1" 
                width="100%" 
                className='small-img' 
                onClick={() => handleImageClick(SmallImg)} 
              />
            </div>
            <div className="small-img-col">
              <img 
                src={placeholderImage} 
                alt="Small Image 2" 
                width="100%" 
                className='small-img' 
                onClick={() => handleImageClick(placeholderImage)} 
              />
            </div>
            <div className="small-img-col">
              <img 
                src={placeholderImage2} 
                alt="Small Image 3" 
                width="100%" 
                className='small-img' 
                onClick={() => handleImageClick(placeholderImage2)} 
              />
            </div>
            <div className="small-img-col">
              <img 
                src={placeholderImage3} 
                alt="Small Image 4" 
                width="100%" 
                className='small-img' 
                onClick={() => handleImageClick(placeholderImage3)} 
              />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Mens Fashion Shirt</h4>
          <h2>$100.00</h2>
          <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
            <option value="custom">Custom</option>
          </select>
          <input type='number' value='1' />
          <button className='normal'>Add To Cart</button>
          <h4>Product Details</h4>
          <span>The Life is a verb hoodie is made with premium materials from, real 6.0 ox per sq. yd. fabric constructed from 100% cotton. This comfortable hoodie is a good pick as a gift or for yourself. Also if you want to turn heads with the latest fahsion topics its time to lock in with MERCH!!!!to support the creators of the brand keep buying merchandise, because thats what enables us to continue this cycle of buissness. Thank you to all the dedicated fans and supporters, additonally we have you guys to thanks.</span>
        </div>
      </section>

      <div className="Featured">
        <h2 className='featured-header'>Our Featured</h2>
        <p className='featured-text'>These listed items are considered our best sellers and our personal favorites.</p>
        <div className='flexbox2'>
          <div className="box1"><img className='box1-img' src={placeholderImage} alt="Featured 1" />      <h3>Product 1</h3>
            <p className="price">$25.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div></div>
          <div className="box2"><img className='box2-img' src={placeholderImage2} alt="Featured 2" />      <h3>Product 1</h3>
            <p className="price">$25.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div></div>
          <div className="box3"><img className='box3-img' src={placeholderImage3} alt="Featured 3" />      <h3>Product 1</h3>
            <p className="price">$25.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div></div>
          <div className="box1"><img className='box1-img' src={placeholderImage} alt="Featured 4" />      <h3>Product 1</h3>
            <p className="price">$25.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div></div>
        </div>
      </div>

      <Custom />
    </>
  );
}
