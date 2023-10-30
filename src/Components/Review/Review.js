import React, { useState, useEffect } from "react";
import rimg1 from "../Assets/images/Review/2.png";
import rimg2 from "../Assets/images/Review/1.png";
import rimg3 from "../Assets/images/Review/3.png";

import "./Review.css";

const Review = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a setTimeout to delay the appearance of the component.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      <div className={`container review ${isVisible ? "visible" : ""}`}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col col-6 col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={rimg1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mr. John</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col col-6 col-md-3">
          <div class="card" style={{ width: "18rem" }}>
              <img src={rimg2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mrs Larry</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col col-6 col-md-3">
          <div class="card" style={{ width: "18rem" }}>
              <img src={rimg3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Prof. Henry Maguesh</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
