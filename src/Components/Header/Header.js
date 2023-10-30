import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Assets/images/NavLogo/logo.jpg";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      {["md"].map((expand) => (
        <Navbar 
        fixed="top"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="custom-navbar bg-body-tertiary mb-3"
          id="navBar"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link className="header-item" to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/products">Products</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/about">About</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/services">Services</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/reviews">Review</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/blog">Blog</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/events">Event</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/contact">Reach Us</Link></Nav.Link>
                </Nav>
          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
