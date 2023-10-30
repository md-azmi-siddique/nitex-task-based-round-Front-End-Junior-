import React, { useState, useEffect } from "react";
import rimg1 from "../Assets/images//Review/2.png";
import rimg2 from "../Assets/images/Review/1.png";
import rimg3 from "../Assets/images/Review/3.png";

import "./Review.css";

const Review = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a setTimeout to delay the appearance of the component.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container review-container">
      <h1>Reviews of Experts</h1>
      <div
        className={`justify-content-center review ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="row">
        <div className="col-md-4 col-sm-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={rimg1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>John</h5>
              <p class="card-text">
                Good
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={rimg2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Luan</h5>
              <p class="card-text">
                Good
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={rimg3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Canady</h5>
              <p class="card-text">
                Good
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Review;
