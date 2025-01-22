import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import MapIcon from '../assests/map.png'
import TelephoneIcon from '../assests/telephone-handle-silhouette.png'
import EmailIcon from '../assests/email.png'
const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageContent: "",
  });

  const [status, setStatus] = useState(""); // For feedback messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:1010/users/product/getbill",
        {
          // Replace with your endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // Get response text for debugging
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      setStatus("Your message was sent successfully!");
      setFormData({
        name: "",
        email: "",
        messageContent: "",
      }); // Reset form
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging purposes
      setStatus("There was a problem sending your message. Please try again.");
    }
  };

  return (
    <>
    <section id='contact-details' className='about-header'>
      <div className="details">
        <span>Get IN TOUCH!!</span>
          <h2>Visit our vermont location or contact us today</h2>
            <h3>Head Shop</h3>
            <div>
            <li>
    <img className='map-details-icon' src={MapIcon}></img>
        <p>56 Glassford Street Glasgow G1 1UL New York</p>
      </li>
            </div>
            <div>
            <li>
    <img className='map-details-icon' src={EmailIcon}></img>
        <p>contact@example.com</p>
      </li>
            </div>
            <div>
            <li>
    <img className='map-details-icon' src={EmailIcon}></img>
        <p>contact@example.com</p>
      </li>
            </div>
            <div>
            <li>
    <img className='map-details-icon' src={TelephoneIcon}></img>
        <p>1+(123)123-1234</p>
      </li>
            </div>


      </div>
      
    <div className="map">
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22644.632502600365!2d-73.10540948447982!3d44.80976654507252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca1ac1006f2bc5%3A0x6118b82c12cc31bd!2sSt%20Albans%20City%2C%20VT!5e0!3m2!1sen!2sus!4v1736961127429!5m2!1sen!2sus"></iframe>
    </div>
    </section>
    <div className="contact-container2">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="center-Blog">Contact Me</h1>

        <ul className="contact-UL">
          <li>Phone: 802 557-7719</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linked-in</li>
        </ul>
        <h2 className="contact-form-header">We would love to hear from you</h2>
        <label htmlFor="name" className="name-label">
          Name:
          <input
            className="name-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="email-label">
          Email:
          <input
            className="email-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="message-label">
          Message:
          <textarea
            className="message-input"
            id="messageContent"
            name="messageContent"
            value={formData.messageContent}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button className="message-submit" type="submit">
          Send Message
        </button>
      </form>
      {status && <p>{status}</p>} {/* Display feedback message */}
    </div>
    </>
  );
};
export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <ContactForm />
    </div>
    
  );
}
