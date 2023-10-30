import React from "react";
import fruits from "../Assets/images/HeroSection/fruits.jpg";
import juice from "../Assets/images/HeroSection/juice.png";
import vegetables from "../Assets/images/HeroSection/vegetables.png";
import Carousel from "react-bootstrap/Carousel";
import "./HeroDesign.css";

const HeroDesign = () => {
  return (
    <div className="container carousel-section">
      <Carousel>
        <Carousel.Item>
          <div className="row d-flex align-items-center ">
            <div className="col-md-6 product-description">
              <h1>Fruits</h1>
              <p>
              Fruits are natural, edible products of flowering plants that typically contain seeds. They are prized for their sweet or savory taste and are rich in essential nutrients like vitamins, minerals, and dietary fiber. Fruits come in a wide variety of types, including berries (e.g., strawberries), citrus (e.g., oranges), stone fruits (e.g., peaches), and tropical fruits (e.g., bananas). They are often consumed fresh but can also be used in various culinary applications, from salads and desserts to juices and preserves. Fruits are a vital part of a healthy diet, providing energy and numerous health benefits due to their nutrient content and antioxidant properties.
              </p>
              
            </div>
            <div className="col-md-4">
              <img className="carousel-img img-fluid c-img" src={fruits} alt="..." />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row d-flex align-items-center ">
            <div className="col-md-6 product-description">
              <h1>Juice</h1>
              <p>
              Juice is a liquid beverage made from fruits or vegetables, offering a wide range of flavors and colors. It can be sweet or savory, rich in vitamins and minerals. Juice is served cold, enjoyed throughout the day, and is available through various processing methods, making it a versatile and refreshing option.
              </p>
              
            </div>
            <div className="col-md-4">
              <img className="carousel-img img-fluid c-img" src={juice} alt="..." />
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="row d-flex align-items-center ">
            <div className="col-md-6 product-description">
              <h1>Vegetables</h1>
              <p>
              Vegetables are edible plants that form a fundamental part of human diets. They come in a diverse range of types, including leafy greens (e.g., spinach), root vegetables (e.g., carrots), cruciferous vegetables (e.g., broccoli), and more. Vegetables are rich in essential nutrients like vitamins, minerals, and fiber, and they contribute to a balanced and healthy diet. They can be prepared in various ways, including raw, steamed, roasted, or as ingredients in soups, salads, and a wide range of dishes, making them a versatile and vital component of cuisine and nutrition.
              </p>
              
            </div>
            <div class="col-md-4">
              <img className="carousel-img img-fluid c-img" src={vegetables} alt="..." />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroDesign;
