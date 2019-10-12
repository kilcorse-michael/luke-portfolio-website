import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = () => {

  return (
    <div className="container">
      <div className="nav-links">
        <NavLink to="/about"> ABOUT </NavLink>
        <NavLink to="/music"> MUSIC </NavLink>
        <NavLink to="/"> <strong>HOME</strong> </NavLink>
        <NavLink to="/live"> LIVE </NavLink>
        <NavLink to="/contact"> CONTACT </NavLink>
      </div>
    </div>
  );
}

export default Navs;
