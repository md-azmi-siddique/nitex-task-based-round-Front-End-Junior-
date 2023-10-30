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
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
    <div
      className={`justify-content-center review ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="d-flex flex-row mb-3 justify-content-center align-content-start flex-wrap">
        <div className="row row-cols-4 g-4">
          <div className="col col-6 col-md-4 col-sm-4">
            <div className="card h-100">
              <img src={rimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-4 col-sm-4">
            <div className="card h-100">
              <img src={rimg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-4 col-sm-4">
            <div className="card h-100">
              <img src={rimg3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Review;
