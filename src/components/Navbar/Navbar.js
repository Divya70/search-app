import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-div">
      <div className="search-input-div">
        <input type="search" placeholder="search..." className="search-input" />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
    </div>
  );
};

export { Navbar };
