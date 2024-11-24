import React from 'react'
import { Link } from 'react-router-dom'
import './services.css'
export default function services() {
  return (
    <div>Hopefully we will have a mobile app to release soon to make our product better accessible.

      <div className="service-card">
        <h3>Contact Us</h3>
        <Link to='/contact'><p>Contact us via form</p></Link>
      </div>
      
      <div className="service-card">
        <h3>Customer Support</h3>
        <p>-=+=-coming soon-=+=- </p>
      </div>
      
      <div className="service-card">
        <h3>FAQ</h3>
        <p>-=+=-coming soon-=+=- </p>
      </div>
    </div>
  )
}
                                                                