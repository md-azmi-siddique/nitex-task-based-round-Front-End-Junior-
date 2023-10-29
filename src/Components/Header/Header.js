import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Assets/images/NavLogo/logo.jpg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      {["md"].map((expand) => (
        <Navbar 
        
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/organic">Organic</NavDropdown.Item>
                    <NavDropdown.Item href="/non-organic">
                      Non Organic
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="/review">Review</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
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
