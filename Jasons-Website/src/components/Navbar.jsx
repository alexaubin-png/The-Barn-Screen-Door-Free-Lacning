import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myimage2 from  '../assests/LogoBarnScreen.PNG'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* <div className="logo-container">  
    </div> */}
      <a href='/'><img className='navbar-logo' src={myimage2} alt="Logo" /></a>
  
      <div className='navbar'>
        
        <div className="hamburger" onClick={toggleMenu} aria-expanded={isOpen}>
          ☰
        </div>
        <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
          <ul className='nav-UL'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/clothing-gallery'>Shop</Link></li>
          </ul>
          <div className="shoppingcart">
            <Link to='/shoppingCart'>
            <svg className='shoppingcart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="21" r="1"/>
  <circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l1.68 7.59a2 2 0 0 0 1.97 1.66h10.44a2 2 0 0 0 1.97-1.66L23 6H6"/>
</svg>
              </Link>
      
          </div>
        </div>
      </div>
    </>
    

  );
}
