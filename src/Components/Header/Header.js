import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
                  <Nav.Link><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/products">Products</Link></Nav.Link>
                  <Nav.Link><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/about">About</Link></Nav.Link>
                  <Nav.Link><Link style={{textDecoration:'none',fontWeight:'bolder'}} to="/services">Services</Link></Nav.Link>
                  <Nav.Link><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/reviews">Review</Link></Nav.Link>
                  <NavDropdown title="Useful Links" className="custom-dropdown-title">
                    <NavDropdown.Item><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/blog">Blog</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/events">Events</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link><Link style={{textDecoration:'none', fontWeight:'bolder'}} to="/contact">Contact Us</Link></Nav.Link>
                </Nav>
                <Form className="d-flex total-search-box search-box">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                    style={{ width: "200px" }}
                  />
                  <Button variant="outline-success" className="d-flex">
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
