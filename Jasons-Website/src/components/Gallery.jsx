import React from 'react'
import './gallery.css'
import ContentImage from '../assests/Hoodie.png'
import Custom from './HoodieCustomization.jsx'
import DealsImage from '../assests/YIND8997.PNG'
import placeholderImage from '../assests/placeholder1.png'
import placeholderImage2 from '../assests/placeholder2.avif'
import placeholderImage3 from '../assests/placeholder3revamped.png'
import {useNavigate} from 'react-router-dom'

//gallery file can be used to store all clothing items

export default function Gallery() {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/sproduct')
  }
  return (
    <>
      <section className='about-hero-section'>
        <img className='Deals-Image' src={DealsImage} alt="Deals" />
        <h2 className='Deals-Header'>Shop Deals Only</h2>
        <p className='Deals-Text'>Shop for exclusive deals</p>
        <button className='Deals-Button'>25% Off</button>
      </section>

      <div className="Featured">
        <h2 className='featured-header'>Our Featured</h2>
        <p className='featured-text'>These listed items are considered our best sellers and our personal favorites.</p>
        
        {/* First Row of Products */}
        <div className='flexbox'>
          {/* Product 1 */}
          <div className="box1" onClick={handleClick}>
            <img className='box1-img' src={placeholderImage} alt="Product 1" />
            <h3>Product 1</h3>
            <p className="price">$25.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="box2">
            <img className='box2-img' src={placeholderImage2} alt="Product 2" />
            <h3>Product 2</h3>
            <p className="price">$30.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="box3">
            <img className='box3-img' src={placeholderImage3} alt="Product 3" />
            <h3>Product 3</h3>
            <p className="price">$45.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="box1">
            <img className='box1-img' src={placeholderImage} alt="Product 4" />
            <h3>Product 4</h3>
            <p className="price">$35.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Second Row of Products */}
        <div className='flexbox'>
          {/* Product 5 */}
          <div className="box1">
            <img className='box1-img' src={placeholderImage} alt="Product 5" />
            <h3>Product 5</h3>
            <p className="price">$55.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 6 */}
          <div className="box2">
            <img className='box2-img' src={placeholderImage} alt="Product 6" />
            <h3>Product 6</h3>
            <p className="price">$40.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 7 */}
          <div className="box3">
            <img className='box3-img' src={placeholderImage} alt="Product 7" />
            <h3>Product 7</h3>
            <p className="price">$50.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Product 8 */}
          <div className="box1">
            <img className='box1-img' src={placeholderImage} alt="Product 8" />
            <h3>Product 8</h3>
            <p className="price">$60.00</p>
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>

      <Custom />
    </>
  )
}
