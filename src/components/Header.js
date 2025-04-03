import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header */}
      <Navbar expand="lg" className="header">
          <Navbar.Brand href="/">
            <img src="/images/logo/new-logo.png" alt="Logo" width="150px" />
          </Navbar.Brand>

          {/* Hamburger Button */}
          <button className="hamburger" onClick={toggleMenu}>
            <i className="bi bi-list" style={{ fontSize: "40px" }}></i>
            <p>EXPLORE</p>
          </button>
      </Navbar>

      {/* Sidebar Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
    

        {/* Menu Items */}
        <Nav className="">
          <NavDropdown title="Group Companies" id="group-dropdown">
            <NavDropdown.Item href="/innovative-solution-technologies">Innovative Solution Technologies</NavDropdown.Item>
            <NavDropdown.Item href="/digital-india-leader">Digital India Leader</NavDropdown.Item>
            <NavDropdown.Item href="/digital-marketing-companion">Digital Marketing Companion</NavDropdown.Item>
            <NavDropdown.Item href="/thirsty-hunter">Thirsty Hunter</NavDropdown.Item>
            <NavDropdown.Item href="/book-you-online">Book You Online</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Solutions & Services" id="solutions-dropdown">
            <NavDropdown.Item href="#">Business Technology</NavDropdown.Item>
            <NavDropdown.Item href="#">Digital Marketing</NavDropdown.Item>
            <NavDropdown.Item href="#">Digital Payments</NavDropdown.Item>
            <NavDropdown.Item href="#">Business Process Management</NavDropdown.Item>
            <NavDropdown.Item href="#">Cloud Infrastructure</NavDropdown.Item>
            <NavDropdown.Item href="#">Tech Digital Consulting</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#">Clients</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>

        {/* Phone Section */}
        <div className="phone">
          <p> +1(437) 376 8000</p>
          <p>+91-9555-411-411</p>
        </div>
      </div>

    
    </>
  );
};

export default Header;
