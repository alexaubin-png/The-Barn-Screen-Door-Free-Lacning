import React, { useRef, useState } from "react";
//hoodie customization should be within an "custom item" and not available for every item, instead only accessible once user checkouts with the "custom item" that way the custom item is already within the cart description
const HoodieCustomizer = () => {
  const [color, setColor] = useState("#000000"); // Default color is black
  const [text, setText] = useState(""); // Text that the user will input
  const [uploadedImage, setUploadedImage] = useState(null); // Store the uploaded logo/image
  const canvasRef = useRef(null);

  // Update the canvas with hoodie color, text, and logo
  const updateCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the hoodie color (simulating a hoodie on a simple rectangle)
    ctx.fillStyle = color;
    ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

    // Draw the text if any
    if (text) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }

    // Draw the uploaded image (if any)
    if (uploadedImage) {
      const img = new Image();
      img.src = uploadedImage;
      img.onload = () => {
        // Scale and position the logo in the middle of the hoodie
        const logoSize = 100; // Set the logo size
        ctx.drawImage(img, canvas.width / 2 - logoSize / 2, canvas.height / 2 - logoSize / 2, logoSize, logoSize);
      };
    }
  };

  // Handle the color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
    updateCanvas();
  };

  // Handle text input
  const handleTextChange = (event) => {
    setText(event.target.value);
    updateCanvas();
  };

  // Handle image upload (logo)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        updateCanvas();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Customize Your Hoodie</h1>

      {/* Color Picker */}
      <div>
        <label>Select Hoodie Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>

      {/* Text Input */}
      <div>
        <label>Enter Text: </label>
        <input type="text" value={text} onChange={handleTextChange} placeholder="Add some text" />
      </div>

      {/* Image Upload for Logo */}
      <div>
        <label>Upload Logo (PNG/JPEG): </label>
        <input type="file" onChange={handleImageUpload} accept="image/*" />
      </div>

      {/* Canvas for hoodie preview */}
      <div style={{ marginTop: "20px" }}>
        <canvas ref={canvasRef} width="500" height="600" style={{ border: "1px solid black" }} />
      </div>
    </div>
  );
};

export default HoodieCustomizer;
