import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Checkout() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      <div className="order-details">
        <h1>Total</h1>
        <p>$3.14</p>

        <h1>Shipping</h1>
        <p>Free</p>

        <h1>Payment</h1>
        <p>Credit Card</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="26JDBB6VSGXD8" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
</form>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '3.14', // Total price
                }
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }}
        />
        
        <button className="place-order">Place Order</button>
      </div>
    </PayPalScriptProvider>
  );
}
