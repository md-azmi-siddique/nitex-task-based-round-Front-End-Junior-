import React from "react";
import "./About.css";
import Card from "react-bootstrap/Card";
import about from "../Assets/images/About/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <Card>
          <img className="about-img" src={about} alt="" />
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
            Our singular and unwavering mission is to foster a meaningful connection between dedicated organic farmers and discerning consumers, all in pursuit of a shared aspiration: to provide consumers with access to wholesome, nourishing food. We are dedicated to bridging the gap between those who cultivate the earth with care and those who seek the benefits of truly healthy, sustainable, and organic produce. By facilitating this vital relationship, we aim to empower consumers to make informed choices about their food, promoting both well-being and the well-being of our planet.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
