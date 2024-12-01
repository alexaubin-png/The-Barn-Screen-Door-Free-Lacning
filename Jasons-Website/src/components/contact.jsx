import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

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
        "http://localhost:8080/users/product/getbill",
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
    <div className="contact-container2">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="center-Blog">Contact Me</h1>

        <ul className="contact-UL">
          <li>Phone: 802 557-7719</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linked-in</li>
        </ul>
        <h2 className="contact-form-header">Contact Me Via Form</h2>
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
