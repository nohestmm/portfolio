import React from 'react';
import photo from '../img/photo.jpeg';
import { NavLink } from 'react-router-dom';
const Asidemenu = () => {
    return (
        <section className="aside-profile">
            <img className="aside-myphoto" src={photo} alt="" />
            <div className="content-options">
                <NavLink exact to="/" activeClassName="activo" className="link-text">
                    <div className="icon-menu">
                        <span className="navbar-text">
                            <i className="fas fa-home"></i>
                            Home
            </span>
                    </div>
                </NavLink>
                <NavLink to="/skills" activeClassName="activo" className="link-text">
                    <div className="icon-menu">
                        <span className="navbar-text">
                            <i className="fas fa-tools"></i>
                            Skills
              </span>
                    </div>
                </NavLink>
                <NavLink to="/projects" activeClassName="activo" className="link-text">
                    <div className="icon-menu">
                        <span className="navbar-text">
                            <i className="fas fa-briefcase"></i>
                            Portfolio
                </span>
                    </div>
                </NavLink>
            </div>
        </section>
    )
}
export default Asidemenu;