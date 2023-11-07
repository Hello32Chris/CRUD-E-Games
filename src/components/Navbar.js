import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <NavLink to="/" activeClassName="active" >Home</NavLink>
      <NavLink to="/Games" activeClassName="active" >Games</NavLink>
      <NavLink to="/Search" activeClassName="active" >Search</NavLink>
      <NavLink to="/About" activeClassName="active" >About</NavLink>
      <NavLink to="/customers" activeClassName="active" >Custys</NavLink>
    </nav>
  );
}

export default Navbar;
