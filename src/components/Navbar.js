import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [toggle, setToggle] = useState(true)

  function toggleNav(e) {
    e.preventDefault()
    setToggle(!toggle)
    console.log('clicked')
  }

  const nav = (toggle ? <button className="navButton" onClick={toggleNav}>Button</button> :
    <nav id="navbar" >
      <div className="navbar">
        <button className="closebtn" onClick={toggleNav}>Button</button>
        <NavLink className='link' to="/" activeClassName="active" >Home</NavLink>
        <NavLink className='link' to="/Games" activeClassName="active" >Games</NavLink>
        <NavLink className='link' to="/Search" activeClassName="active" >Search</NavLink>
        <NavLink className='link' to="/About" activeClassName="active" >About</NavLink>
        <NavLink  className='link'to="/customers" activeClassName="active" >Custys</NavLink>
      </div>
    </nav>)

  // console.log(toggle)

  return (
    <div>
      {nav}
    </div>
  );
}

export default Navbar;
