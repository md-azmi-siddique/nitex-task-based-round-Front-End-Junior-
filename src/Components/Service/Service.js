import React from "react";
import img1 from '../Assets/images/Services/1.png'
import img2 from '../Assets/images/Services/2.png'
import img3 from '../Assets/images/Services/3.png'
import img4 from '../Assets/images/Services/4.png'

const Service = () => {
  return (
    <div>
      <div className="container">
        <h1>Our Services</h1>
        <div className="row">
          <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img1} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Home Delivery</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img4} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Consumer-Farmer Relationship</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img2} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Waste Management</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img3} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Customer Service</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
