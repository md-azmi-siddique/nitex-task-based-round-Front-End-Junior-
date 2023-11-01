import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../Assets/images/Services/1.png";
import img2 from "../Assets/images/Services/2.png";
import img3 from "../Assets/images/Services/3.png";
import img4 from "../Assets/images/Services/4.png";
import "./Service.css";

const Service = () => {
  return (
    <div className="container service-box">
      <h1>Our Services</h1>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Home Delivery</Card.Title>
              <Card.Text>
                Home delivery door to door.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={img4}
              alt="Consumer-Farmer Relationship"
              className="card-img"
            />
            <div className="card-body">
              <h5>Consumer-Farmer Relationship</h5>
              <p className="card-text">
                The client-farmer relationship denotes a partnership between
                agricultural service providers or organizations and farmers...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ width: "20rem" }}>
            <img src={img3} alt="24/7 Helpline" className="card-img" />
            <div className="card-body">
              <h5>24/7 Helpline</h5>
              <p className="card-text">
                Customer service refers to the assistance and support provided
                to customers...
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: "20rem" }}>
            <img src={img2} alt="Waste Management" className="card-img" />
            <div className="card-body">
              <h5>Waste Management</h5>
              <p className="card-text">
                Waste management is the systematic handling, collection,
                disposal...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
