import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="footer">
      <div className="container my-5">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Food House
                  </h6>
                  <p>
                    Providing the better and organic food for you and your
                    family.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>Organic</p>
                  <p>Non Organic</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Services
                  </h6>
                  <p>Home Delivery</p>
                  <p>Waste Management</p>
                  <p>24/7 Customer Support</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">
                      MDBootstrap.com
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
