import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbarmain = ({ show, hidden }) => {
  const navbar = show ? "navbar hidden-bars" : "navbar show-bars";
  return (
    <nav className={navbar}>
      <div className="content-options">
        <NavLink to="/">
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-home"></i>
              Home
            </span>
          </div>
        </NavLink>
        <NavLink to="/skills">
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-tools"></i>
              Skills
              </span>
          </div>
        </NavLink>
        <NavLink to="/projects">
        <div className="icon-menu">
          <span className="navbar-text">
            <i className="fas fa-briefcase"></i>
            Portfolio
                </span>
                </div>
                </NavLink>
        <div className="icon-menu">
          <span className="navbar-text" onClick={hidden}>
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbarmain;