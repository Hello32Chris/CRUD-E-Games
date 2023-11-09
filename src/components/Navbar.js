import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar({ gamesArr, setSearchTerm, storeLogged }) {

  const [toggle, setToggle] = useState(true)
  const [searchToggle, setToggleSearch] = useState(false)
 

  function toggleNav(e) {
    e.preventDefault()
    setToggle(!toggle)
    console.log('clicked')
  }
  function toggleSearch(e) {
    e.preventDefault()
    setToggleSearch(!searchToggle)
    console.log('clicked')
  }


  const nav = (toggle ? <button className="login-butt" id="navButton" onClick={toggleNav}>Navigation</button> :
    <nav id="navbar" >
      <div className="navbar">
        <button id="closebtn" onClick={toggleNav}>X</button>
        <NavLink className='link' to="/" activeClassName="active">Home</NavLink>
        <NavLink className='link' to="/Games" activeClassName="active" >Games</NavLink>
        <NavLink className='link' to="/About" activeClassName="active" >About</NavLink>
        {storeLogged &&
        <NavLink className='link' to="/customers" activeClassName="active" >Clients</NavLink>}
      </div>
    </nav>)

  


  // console.log(toggle)
 
  return (
    <div id="navarea">
      <button className="login-butt" onClick={toggleSearch}>Search</button>
      {searchToggle ? <Search setSearchTerm={setSearchTerm}  gamesArr={gamesArr} /> : null}
      {nav}
    </div>
  );
}

export default Navbar;
