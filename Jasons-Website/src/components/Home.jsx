import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import "./home.css";

// Imported images
import myImage from "../assests/NMRQ3994.PNG";
import myImage3 from "../assests/YIND8997.PNG";
import myImage4 from "../assests/Jason-Alex.JPG";
import vermontImage from "../assests/Hoodie.png"; 
import image2 from "../assests/home.PNG";
import image3 from "../assests/LogoBarnScreen.PNG";
import saleBanner from "../assests/wise-minds-clothing-NrF4Dw4BG5Q-unsplash.jpg";
import Animation1 from '../assests/anitmation1.png';
import Animation2 from '../assests/animation2.png';
import Animation3 from '../assests/barnscreen.png';

// Helper component for product items
const ProductItem = ({ image, name, price }) => (
  <div className="box">
    <img src={image} alt={name} className="product-image" />
    <h3>{name}</h3>
    <p className="price">${price}</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
);

const ArticleHeader = () => {
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image array for the animated banner
  const images = [Animation1, Animation2, Animation3];

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  // Scroll to the next section (products)
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="article-container">
        {/* Animated Banner */}
        <h1
          className={`article-header ${animate ? "animate" : ""}`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "200px 0", // Add padding to make it look better
            transition: "background-image 1s ease-in-out", // Smooth transition between images
          }}
        >
          The Barn Screen Door
          <a href="/clothing-gallery">
            <button className="learn-button">Shop</button>
          </a>
        </h1>

        {/* Scroll Down Arrow */}
        <div className="scroll-down-button" onClick={scrollToProducts}>
          <span className="arrow-down">&#8595;</span>
        </div>

        <h2 className="home-trending">Trending</h2>

        {/* Product Listings - Trending */}
        <div className="flexbox1" id="products-section">
          {Array(4).fill(0).map((_, index) => (
            <ProductItem 
              key={index}
              image={vermontImage}
              name={`Product Name ${index + 1}`}
              price="20.00"
            />
          ))}
        </div>

        {/* Product Listings - Float Trending */}
        <div className="float-trending">
          {Array(4).fill(0).map((_, index) => (
            <ProductItem 
              key={index}
              image={vermontImage}
              name={`Product Name ${index + 1}`}
              price="20.00"
            />
          ))}
        </div>

        {/* Contact Image Section */}
        <Link to="/Contact">
          <img src={myImage4} alt="email-link" className="main-image-home" />
        </Link>

        {/* Additional Images Section */}
        <div className="container-home">
          <img src={myImage} className="homeImage-1" alt="clothing gallery" />
          <a className="DevZone" href="/clothing-gallery">Recommendations</a>
          <img src={myImage3} className="homeImage2" alt="#" />
          <a className="DevZone" href="#">Founder</a>
          <img
            src="https://i.gyazo.com/dda60d409d5f24e6560d7637103bb73c.png"
            className="homeImage3"
            alt="#"
          />
          <a className="DevZone" href="#">GitHub/Website Creator</a>
        </div>

        {/* Main Content */}
        <div className="content-home">
          Looking for stylish, high-quality clothing at unbeatable prices? Welcome to The Barn Screen Door! We offer a wide range of fashion-forward pieces, all backed by our 100% satisfaction guarantee—if you're not completely happy with your purchase, we’ll give you a full refund. Plus, enjoy fast, reliable shipping within the United States, so your new favorite outfits will arrive quickly and hassle-free. Shop with confidence at The Barn Screen Door, where you’re guaranteed great value, exceptional quality, and peace of mind with every order!<br/><br/>
          The Initial mission is to provide for the community, thats exactly what I felt empowered, motivated, and experienced enough to complete that exact goal. The mission is to team up with my nephew and create a website to be the leader of the community, a central hub for orders, and competitive prices, delivery times, order tracking, and product quality. The website will eventually be developed into the app store and will be used to create a mobile-friendly experience, and ultimately a more efficient way of boosting numbers.<br/><br/>
          <img src="#" alt="Mission Image" />
        </div>

        {/* Sale Banner Section */}
        <div className="sale-container">
          <img src={saleBanner} alt="sale-banner" className="sale-banner" />
          <h2 className="sale-header">Sale! 20% Off All Custom Designs</h2>
          <p className="sale-p">
            Limited time only, so get ready to dress up for the weekend with our amazing deals!
          </p>
          <Link to="/clothing-gallery">
            <button className="sale-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
