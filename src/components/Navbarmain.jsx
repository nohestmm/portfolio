import React from 'react';


const Navbarmain = ({ show, hidden }) => {
  const navbar = show ? "navbar display-block" : "navbar display-none";
  return (
    <nav className={navbar}>
      <div className="content-options">
        <div className="icon-menu"><span className="navbar-text">
          <i className="fas fa-home"></i>
          Home
            </span></div>
        <div className="icon-menu">
          <span className="navbar-text">
          <i className="fas fa-tools"></i>
          Skills
              </span>
              </div>
        <div className="icon-menu">
          <span className="navbar-text">
          <i className="fas fa-briefcase"></i>
          Portfolio
                </span></div>
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