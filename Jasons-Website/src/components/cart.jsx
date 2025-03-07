import React, { useState } from 'react';
import './cart.css';
import RemoveIcon from '../assests/remove.png';
import CartImage from '../assests/cottonJersey.avif';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function Cart({ cartItems, setCartItems }) {
  const [orderId, setOrderId] = useState(null); // to store order ID
  const [orderStatus, setOrderStatus] = useState(''); // to track order status
  const [trackingNumber, setTrackingNumber] = useState(''); // to track tracking number
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalPrice = getTotalPrice();

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleOrderTracking = (orderId) => {
    // Simulating a tracking info fetch based on orderId
    // In a real scenario, you'd fetch this from your backend or external service.
    setTrackingNumber('123456789'); // Example tracking number
    setOrderStatus('Shipped'); // Example order status
  };

  return (
    <section className='section-p1'>
      <table width='100%'>
        <thead className='table-content-container'>
          <tr className='table-content'>
            <th className='table-item'>Remove</th>
            <th className='table-item'>Image</th>
            <th className='table-item'>Product</th>
            <th className='table-item'>Price</th>
            <th className='table-item'>Quantity</th>
            <div className='cart-total'>
              <h3>Total: ${totalPrice}</h3>
            </div>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className='table-content'>
              <td className='table-item'>
                <img
                  className='remove-icon'
                  src={RemoveIcon}
                  alt="Remove"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </td>
              <td className='table-item'>
                <img className='cart-Image' src={item.image} alt={item.name} />
              </td>
              <td className='table-item'>{item.name}</td>
              <td className='table-item'>${item.price}</td>
              <td className='table-item'>{item.quantity}</td>
              <td className='table-item'>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='cart-total'>
        <h3>Total: ${totalPrice}</h3>
      </div>

      {/* Order Tracking Section */}
      {orderId && (
        <div className='order-tracking'>
          <h3>Order Tracking</h3>
          <p>Order ID: {orderId}</p>
          <p>Status: {orderStatus}</p>
          <p>Tracking Number: {trackingNumber}</p>
        </div>
      )}

      <div className='paypal-button-container'>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
              // After successful payment, create an order and track it
              const newOrderId = `ORD-${new Date().getTime()}`;
              setOrderId(newOrderId); // Set generated order ID
              handleOrderTracking(newOrderId); // Get tracking details
            });
          }}
          onError={(err) => {
            console.error('PayPal Checkout Error: ', err);
          }}
        />
      </div>
    </section>
  );
}
