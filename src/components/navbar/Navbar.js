import React, { useState } from "react";
import { FaBars, FaHamburger, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <FaHamburger
            size={40}
            style={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </div>
        <ul className={nav ? "navbar-menu active" : "navbar-menu"}>
          <li>Home</li>
          <li>Order</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={40} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={40} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
