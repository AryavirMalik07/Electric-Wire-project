import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
// import logo from "../images/cred-logo.webp";
const Navbar = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  //   if hamberger is open then close else vice-versa
  const toggleMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-nav-bar flex flex-col items-center justify-center">
          <Link to="/" className="mobile-nav-item ">
            Home
          </Link>
          <Link to="/about" className="mobile-nav-item  ">
            About
          </Link>
          <Link to="/products" className="mobile-nav-item ">
            Products
          </Link>
          <Link to="/contact" className="mobile-nav-item  ">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex max-width header">
        <h1 className="header-logo">Balaji Wires</h1>
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <Link to="/" className="header-nav-item ">
            Home
          </Link>
          <Link to="/about" className="header-nav-item  ">
            About
          </Link>
          <Link to="/products" className="header-nav-item ">
            Products
          </Link>
          <Link to="/contact" className="header-nav-item  ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
