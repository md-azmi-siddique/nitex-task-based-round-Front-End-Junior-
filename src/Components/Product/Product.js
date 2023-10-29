import React, { useState, useEffect } from "react";
import "./Product.css"; // Create a CSS file (Product.css) for your styles
import img1 from '../Assets/images/Products/Fruits/1.png'
import img2 from '../Assets/images/Products/Fruits/2.png'
import img3 from '../Assets/images/Products/Fruits/3.png'
import img4 from '../Assets/images/Products/Fruits/4.png'

const Product = () => {
  const [showH1, setShowH1] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowH1(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container product-container">
      <div className={`product-title ${showH1 ? "show" : ""}`}>
        <h1>Feature Products</h1>
        <br></br>
        <h3>Fruits</h3>
        <div class="d-flex product-fruits">
          <div class="flex-shrink-0">
            <img className="product-img" src={img1} alt="..." />
          </div>
          <div class="flex-grow-1 ms-3">
          Apples are round or oval fruits, often red or green, with a crisp texture and sweet to tart flavor. They are a good source of fiber and various nutrients.
          </div>
        </div>
        <div class="d-flex product-fruits">
          <div class="flex-shrink-0">
            <img className="product-img" src={img2} alt="..." />
          </div>
          <div class="flex-grow-1 ms-3">
          Mango is a tropical fruit prized for its juicy, sweet, and fragrant flesh. It has a distinctive oval shape and often has a yellow-orange skin. Rich in vitamins and antioxidants.
          </div>
        </div>
        <div class="d-flex product-fruits">
          <div class="flex-shrink-0">
            <img className="product-img" src={img3} alt="..." />
          </div>
          <div class="flex-grow-1 ms-3">
          Banana is a popular tropical fruit, known for its yellow color, creamy texture, and sweet flavor, rich in potassium and dietary fiber.
          </div>
        </div>
        <div class="d-flex product-fruits">
          <div class="flex-shrink-0">
            <img className="product-img" src={img4} alt="..." />
          </div>
          <div class="flex-grow-1 ms-3">
          An orange is a citrus fruit, known for its round shape, vibrant orange color, and sweet-tangy flavor, abundant in vitamin C.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
