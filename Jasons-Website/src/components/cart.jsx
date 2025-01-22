import React from 'react'
import './cart.css'
import RemoveIcon from '../assests/remove.png'
export default function() {
  return (
    <section className='section-p1'>
      <tabel width='100%'>
        <thead className='table-content-container'><br></br>
          <tr className='table-content'>
          <th className='table-item'>Remove</th>
          <th className='table-item'>Image</th>
            <th className='table-item'>Product</th>
            <th className='table-item'>Price</th>
            <th className='table-item'>Quantity</th>
            <th className='table-item'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-content'>
            <td className='table-item'><img className='remove-icon' src={RemoveIcon}></img></td>
            <td className='table-item'><img src='product1.jpg' alt='Product 1' /></td>
            <td className='table-item'>Life-Is-A-Verb-Hoodie</td>
            <td className='table-item'>$25.00</td>
            <td className='table-item'>1</td>
            <td className='table-item'></td>
          </tr>
        </tbody>
      </tabel>
    {/* <div className='shopping-cart-container'>
             <h1>Shopping Cart</h1>
            <ul>
            <li>shirt</li>
            <li>shirt</li>
        </ul>

    </div> */}

    </section>

  )
}
