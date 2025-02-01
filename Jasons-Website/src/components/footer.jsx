import React from 'react'
import myimage2 from '../assests/LogoBarnScreen.PNG'
import './footer.css'
import 'font-awesome/css/font-awesome.min.css';
import myTwitter from '../assests/logos.png'
import myFacebook from '../assests/facebook-app-symbol.png'
import myInstagram from '../assests/instagram-app-symbol.png'
import AppleStore from '../assests/apple-store-vector-icon_901408-728.avif'
import paypalIcon from '../assests/paypal.png'
import myYouTube from '../assests/youtube.png'
export default function footer() {
  return (
    <div className='footer-main-content'>
   <div className='col'>
   <a href='/'><img className='navbar-logo-footer' src={myimage2} alt="Logo" /></a>
   <h4>Contact</h4>
   <p><strong>Address:</strong> Saint Albans Vermont</p>
   <p><strong>Phone:</strong> (802)557-7719</p>
   <p><strong>Hours:</strong> N/A</p>
   <div className="follow">
    <h4>follow us</h4>
    <div className="icon">
      <a className='twitter-link'href="https://www.twitter.com/jasons_website"><img className='Twitter' src={myTwitter }></img>Twitter</a>
      <a className='instagram-link' href="https://www.instagram.com/jasons_website"><img src={myInstagram}className="instagram"></img>Instagram</a>
      <a className='facebook-link' href="https://www.linkedin.com/in/jasons-website/"><img  className='facebook' src={myFacebook}></img>Facebook</a>
      <a className='youtube-link' href=''><img className='youtube' src={myYouTube}></img>YouTube</a>
    </div>
   </div>
</div>
<div className="col">
  <h4>About</h4>
  <a className='col-a' href='#'>About Us</a><br></br>
  <a className='col-a' href='/Terms-and-Conditions'>Delivery Infomartion</a><br></br>
  <a className='col-a' href='#'>Terms and Conditions</a><br></br>
  <a className='col-a'href='#'>Contact Us</a><br></br>
  <a className='col-a' href='#'>Privacy Policy</a>
</div>
    <div className="col">
      <h4>My Account</h4>
      <a className='col-a' href='/auth'>Sign In</a><br></br>
      <a className='col-a'href='#'>Register</a><br></br>
      <a className='col-a' href='#'>Track Order</a><br></br>
      <a className='col-a'href='#'>Help</a><br></br>
      <a className='col-a'href='#'>My Wishlist</a>
    </div>
    <div className="col">
      <h4>Install App</h4>
   <p>From App Store or Google Play</p>
   <div className="row">
     <img src={AppleStore} className='app-store' alt='#' />
     <img src='https://i.gyazo.com/d5f8447377426b5b44d80477d60f6b5e.png' className='google-play' alt='#' />
   </div>
      <p className='col-a'>Secured Payment Gateways</p><br></br>
      <img src={paypalIcon} className='paypal' alt='#' />
     <img src='#' className='debit' alt='#' />
    </div>
    </div>
    
  )
}
