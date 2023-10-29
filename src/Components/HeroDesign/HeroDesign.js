import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import c1 from "../Assets/images/NavLogo/logo.jpg";
import './HeroDesign.css'

const HeroDesign = () => {
  return (
    <div className="container carousel-section">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div class="row d-flex align-items-center ">
                    <div class="col-md-6 product-description">
                        <h1>Mackbook Pro</h1>
                        <p>
                            The MacBook, designed by Apple, is a sleek and powerful laptop renowned for its premium build quality, stunning Retina displays, and seamless integration with macOS. It continues to set industry standards for performance, design, and user experience, making it a preferred choice for professionals and creatives worldwide.
                        </p>
                        <button class="buyNow">BUY NOW</button>
                    </div>
                    <div class="col-md-6">
                        <img className="carousel-img" src={c1} alt="..."/>
                    </div>
                </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" style={{marginRight: '200px'}}></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" style={{marginLeft: '200px'}}></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroDesign;
