import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom';
import './home.css';
import myImage from '../assests/NMRQ3994.PNG';
import myImage3 from '../assests/YIND8997.PNG';
import myImage4 from '../assests/Jason-Alex.JPG';
import vermontImage from '../assests/Hoodie.png'; // Import your images
import image2 from '../assests/home.PNG';
import image3 from '../assests/LogoBarnScreen.PNG';
import saleBanner from '../assests/wise-minds-clothing-NrF4Dw4BG5Q-unsplash.jpg'

const ArticleHeader = () => {
  const [animate, setAnimate]= useState(false)
  const images = [vermontImage, image2, image3]; // Use imported images

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
useEffect(() =>{

  setAnimate(true);

  const timeout = setTimeout(()=>{
setAnimate(false);

  }, 500)

})
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <>
    <div className="article-container">
      <h1
        className={`article-header ${animate ? 'animate' : ''}`}
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '100px 0' // Add padding to make it look better
        }}
      >
        The Barn Screen Door 
       <a href='/clothing-gallery'><button className='learn-button'>Shop</button></a> 
      </h1>
      <h2>Trending</h2>
      <div className="flexbox1">
        <div className="box">
          <img  src={vermontImage} alt="Product 1" className="product-image" />
          <h3>Product Name 1</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img  src={vermontImage} alt="Product 2" className="product-image" />
          <h3>Product Name 2</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src={vermontImage} alt="Product 3" className="product-image" />
          <h3>Product Name 3</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src={vermontImage} alt="Product 3" className="product-image" />
          <h3>Product Name 3</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
 
      </div>
      <div className="float-trending">
      <div className="box">
          <img  src={vermontImage} alt="Product 1" className="product-image" />
          <h3>Product Name 1</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img  src={vermontImage} alt="Product 2" className="product-image" />
          <h3>Product Name 2</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src={vermontImage} alt="Product 3" className="product-image" />
          <h3 className='flexbox-header'>Product Name 3</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src={vermontImage} alt="Product 3" className="product-image" />
          <h3>Product Name 3</h3>
          <p className="price">$20.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <Link to='/Contact'>
        <img src={myImage4} alt='email-link' className='main-image-home' />
      </Link>
      
      <div className="container-home">
        <img src={myImage} className='homeImage-1' alt='clothing gallery image' />
        <a className="DevZone" href='/clothing-gallery'>reccomendations</a>
        <img src={myImage3} className='homeImage2' alt='#' />
        <a className="DevZone" href='#'>Founder</a>
        <img src='https://i.gyazo.com/dda60d409d5f24e6560d7637103bb73c.png' className='homeImage3' alt='#' />
        <a className='DevZone' href='#'>GitHub/Website Creator</a>
      </div>

      <div className="content-home">

      Looking for stylish, high-quality clothing at unbeatable prices? Welcome to The Barn Screen Door! We offer a wide range of fashion-forward pieces, all backed by our 100% satisfaction guarantee—if you're not completely happy with your purchase, we’ll give you a full refund. Plus, enjoy fast, reliable shipping within the United States, so your new favorite outfits will arrive quickly and hassle-free. Shop with confidence at The Barn Screen Door, where you’re guaranteed great value, exceptional quality, and peace of mind with every order!
      <img src='#'></img>
 
      </div>
      <div className="sale-container">
        <img src={saleBanner} alt='sale-banner' className='sale-banner' />
        <h2>Sale! 20% Off All Custom Dsigns</h2>
        <p>Limited time only, so get ready to dress up for the weekend with our amazing deals!</p>
        <Link to='/clothing-gallery'>
          <button className='sale-button'>Shop Now</button>
        </Link>
      </div>
    </div>
    </>
    
  );
};

export default ArticleHeader;
