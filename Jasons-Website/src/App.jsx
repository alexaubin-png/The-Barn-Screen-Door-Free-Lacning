import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx'
import LearnMore from './components/learnMore.jsx'
import Services from './components/services.jsx';
import Clothing from './components/Gallery.jsx';
import Gallery from './components/Gallery.jsx';
import Checkout from './components/checkout.jsx';
import Cart from './components/cart.jsx';
import BlogPosts from './components/Blog.jsx'
import CustomHoodie from './components/HoodieCustomization.jsx'
import Blog from "./components/Blog.jsx";
import Auth from './components/auth.jsx';
import ProductDetails from './components/sproduct.jsx'

function App() {
  return (
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path='/learn-more' element={<LearnMore/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/clothing-gallery' element={<Clothing />}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/shoppingCart' element={<Cart/>}></Route>
        <Route path='/custom' element={<CustomHoodie/>}></Route>
        <Route path='/blogs' element={<BlogPosts/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/sproduct' element={<ProductDetails/>}></Route>
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
