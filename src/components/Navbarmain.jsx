import React from 'react';
import { NavLink } from 'react-router-dom';
import siglas from '../img/siglas.png';
export let active;
const Navbarmain = ({show, hidden}) => {
 
  const navbar = show ? "navbar hidden-bars" : "navbar show-bars";
  return (
    <nav className={navbar}>
      <div className="content-options" onClick={hidden}>
      <NavLink exact to= "/"activeClassName= "activo" className="link-text">
          <div className="icon-menu">
          <span className="navbar-text">
              <img src={siglas} alt="profile" className="photo-navbar"/>
              </span>
          </div>
        </NavLink>
        <NavLink exact to= "/"activeClassName= "activo" className="link-text">
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-home"></i>
              Home
            </span>
          </div>
        </NavLink>
        </div>
        <div className="content-options" onClick={hidden}>
        <NavLink to="/skills"  activeClassName= "activo" className="link-text">
          <div className="icon-menu">
            <span className="navbar-text">
              <i className="fas fa-tools"></i>
              Skills
              </span>
          </div>
        </NavLink>
        </div>
        <div className="content-options" onClick={hidden}>
        <NavLink to="/projects"  activeClassName= "activo" className="link-text">
        <div className="icon-menu">
          <span className="navbar-text">
            <i className="fas fa-briefcase"></i>
            Portfolio
                </span>
                </div>
                </NavLink>
                </div>
          
    </nav>
  )
}

export default Navbarmain;