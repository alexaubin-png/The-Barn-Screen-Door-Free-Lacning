import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import React from "react";
import Home from "./components/Home.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import LearnMore from './components/learnMore.jsx';
import Services from './components/services.jsx';
import Clothing from './components/Gallery.jsx';
import Checkout from './components/checkout.jsx';
import Cart from './components/cart.jsx';
import BlogPosts from './components/Blog.jsx';
import CustomHoodie from './components/HoodieCustomization.jsx';
import Auth from './components/auth.jsx';
import ProductDetails from './components/sproduct.jsx';
import NewsLetter from './components/newsletter.jsx';
import TermsAndConditions from './components/T&C.jsx'
import UpdateUserSettings from './components/updateUserSettings.jsx';
import Gallery from './components/Gallery.jsx'
function App() {
  // Correct the state variable name to `cartItems`
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === product.id);
      if (itemIndex >= 0) {
        // If the item is already in the cart, increase its quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      // Otherwise, add the item to the cart with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorials" element={<Tutorials />} />
        {/* <Route path='/learn-more' element={<LearnMore />} /> */}
        <Route path='/services' element={<Services />} />
        <Route path='/clothing-gallery' element={<Clothing addToCart={addToCart} />} /> {/* Pass `addToCart` here */}
        <Route path='/checkout' element={<Checkout cartItems={cartItems} totalPrice={getTotalPrice()} />} />
        <Route path='/shoppingCart' element={<Cart cartItems={cartItems} totalPrice={getTotalPrice()} />} />
        <Route path='/custom' element={<CustomHoodie />} />
        <Route path='/blogs' element={<BlogPosts />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/sproduct' element={<ProductDetails addToCart={addToCart} />} /> {/* Pass `addToCart` here */}
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/Terms-and-Conditions' element={<TermsAndConditions/>}></Route>
        <Route path='/Settings' element={<UpdateUserSettings/>}></Route>
      </Routes>
      <NewsLetter />
      <Footer />
       {/* <Gallery addToCart={addToCart} /> */}
    </Router>
 
   
  );
}

export default App;
