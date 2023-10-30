import React from "react";
import img1 from "../Assets/images/Services/1.png";
import img2 from "../Assets/images/Services/2.png";
import img3 from "../Assets/images/Services/3.png";
import img4 from "../Assets/images/Services/4.png";
import "./Service.css";

const Service = () => {
  return (
    <div className="container service-box align-items-center">
      <h1>Our Services</h1>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Home Delivery</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Consumer-Farmer Relationship</h5>
              <p class="card-text">
                The client-farmer relationship denotes a partnership between
                agricultural service providers or organizations and farmers. It
                involves providing support, resources, and expertise to farmers
                to improve their agricultural practices, yield, and overall
                livelihoods. This relationship fosters mutual trust,
                knowledge-sharing, and long-term collaboration for sustainable
                farming outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <div class="card" style={{ width: "18rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>24/7 Helpline</h5>
              <p class="card-text">
              Customer service refers to the assistance and support provided to customers by businesses or organizations to address their inquiries, concerns, and needs, enhancing customer satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div class="card" style={{ width: "18rem" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Waste Management</h5>
              <p class="card-text">
              Waste management is the systematic handling, collection, disposal, and recycling of waste materials to minimize environmental impact and promote sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
