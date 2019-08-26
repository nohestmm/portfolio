import React from 'react';
import { Link } from 'react-router-dom';
const Navbarmain = ({ show, hidden }) => {
  const navbar = show ? "navbar hidden-bars" : "navbar show-bars";
  return (
    <nav className={navbar}>
      <div className="content-options">
        <Link to={"/"}>
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-home"></i>
              Home
            </span>
          </div>
        </Link>
        <Link to={"/skills"}>
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-tools"></i>
              Skills
              </span>
          </div>
        </Link>
        <Link to={"/projects"}>
        <div className="icon-menu">
          <span className="navbar-text">
            <i className="fas fa-briefcase"></i>
            Portfolio
                </span>
                </div>
                </Link>
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