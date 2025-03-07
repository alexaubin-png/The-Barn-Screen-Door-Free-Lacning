import React from 'react'
import './gallery.css'
import '../App.jsx'
import ContentImage from '../assests/Hoodie.png'
import Custom from './HoodieCustomization.jsx'
import DealsImage from '../assests/YIND8997.PNG'
import placeholderImage from '../assests/placeholder1.png'
import placeholderImage2 from '../assests/placeholder2.avif'
import placeholderImage3 from '../assests/placeholder3revamped.png'

import {useNavigate} from 'react-router-dom'
import{useState} from 'react'
//gallery file can be used to store all clothing items

export default function Gallery({addToCart}) {
  const [cartItems, setCartItemsState] = useState([]);
  
  //   // Function to add items to the cart
  //   const addToCart = (product) => {
  //     setCartItems((prevItems) => {
  //       const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === product.id);
  //       if (itemIndex >= 0) {
  //         // If the item is already in the cart, increase its quantity
  //         const updatedItems = [...prevItems];
  //         updatedItems[itemIndex].quantity += 1;
  //         return updatedItems;
  //       }
  //       // Otherwise, add the item to the cart with quantity 1
  //       return [...prevItems, { ...product, quantity: 1 }];
  //     });
  //   };
  
  console.log(addToCart)
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/sproduct')
  }

  
 
  const handleAddToCart = (product) => {
    // Add the product to the cart
    addToCart(product)
    // Navigate to the cart page
    navigate('/shoppingCart')
  }
  const products = [
    { id: 1, name: 'Product 1', price: 25.00, image: placeholderImage },
    { id: 2, name: 'Product 2', price: 30.00, image: placeholderImage2 },
    { id: 3, name: 'Product 3', price: 45.00, image: placeholderImage3 },
    { id: 4, name: 'Product 4', price: 35.00, image: placeholderImage },
    { id: 5, name: 'Product 5', price: 55.00, image: placeholderImage },
    { id: 6, name: 'Product 6', price: 40.00, image: placeholderImage2 },
    { id: 7, name: 'Product 7', price: 50.00, image: placeholderImage3 },
    { id: 8, name: 'Product 8', price: 60.00, image: placeholderImage },
  ];
  return (
    <>
      <section id='about-hero-section' className='about-hero-section'>
        <img className='Deals-Image' src={DealsImage} alt="Deals" />
        <h2 className='Deals-Header'>Shop Deals Only</h2>
        <p className='Deals-Text'>Shop for exclusive deals</p>
        <button className='Deals-Button'>25% Off</button>
      </section>

      <div className="Featured">
        <h2 className='featured-header'>Our Featured</h2>
        <p className='featured-text'>These listed items are considered our best sellers and our personal favorites.</p>

        {/* Loop through the products and display each one */}
        <div className='flexbox'>
          {products.map((product) => (
            <div className="product-box" key={product.id}>
              <a href='/sproduct'><img className='product-img' src={product.image} alt={product.name} /></a>
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <div className="stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              {/* Add to Cart button */}
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
               
            </div>
          ))}
        </div>
      </div>

      <Custom />
    </>
  )
}
