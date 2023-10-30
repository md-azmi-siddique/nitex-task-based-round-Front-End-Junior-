import React from "react";
import img1 from '../Assets/images/Services/1.png'
import img2 from '../Assets/images/Services/2.png'
import img3 from '../Assets/images/Services/3.png'
import img4 from '../Assets/images/Services/4.png'
import './Service.css'

const Service = () => {
  return (
    <div>
      <div className="container">
        <h1>Our Services</h1>
        <div className="row">
          <div className="col-md-6 col-sm-6 fade-in">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img1} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Home Delivery</h5>
                    <p class="card-text">
                    Home delivery is a service offered by businesses where products or goods are brought directly to a customer's residence, providing convenience and reducing the need for in-person shopping or pick-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 fade-in">
          <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img4} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Consumer-Farmer Relationship</h5>
                    <p class="card-text">
                    The client-farmer relationship denotes a partnership between agricultural service providers or organizations and farmers. It involves providing support, resources, and expertise to farmers to improve their agricultural practices, yield, and overall livelihoods. This relationship fosters mutual trust, knowledge-sharing, and long-term collaboration for sustainable farming outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 fade-in">
          <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img2} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Waste Management</h5>
                    <p class="card-text">
                    Waste management is the systematic handling, collection, disposal, and recycling of waste materials to minimize environmental impact and promote sustainability.
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 fade-in">
          <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={img3} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">Customer Service</h5>
                    <p class="card-text">
                    Customer service refers to the assistance and support provided to customers by businesses or organizations to address their inquiries, concerns, and needs, enhancing customer satisfaction and loyalty.
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
