import React, { Component } from 'react';
import './App.css';
import photo from './img/photo.jpeg';
import '../node_modules/@fortawesome/fontawesome-free/js/all'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


class App extends Component {
  render() {
    return (
      <>
        <header className="top-div">
          
          <nav className="navbar">
            <span className="navbar-text"><i className="fas fa-home"></i>
              Home
            </span>
            <span className="navbar-text">
              <i className="fas fa-tools"></i>
              Skills
              </span>
            <span className="navbar-text">
              <i className="fas fa-briefcase"></i>
              Portfolio
                </span>
            <span className="navbar-text"><i className="fas fa-bars"></i></span>
          </nav>
        </header>
        <section className="profile-photo"><img className="myphoto" src={photo} alt="" /></section>
        <section className="bottom-div">
          <h1 className="name">NOHEMÍ MARTÍNEZ</h1>
          <h6 className="text-bottom_name">{"<Front-end Developer/>"}</h6>
          <p className="paragraph">La programación siempre ha formado
            parte de mi formación académica, y Laboratoria me brindó la
            oportunidad de mejorar mis habilidades y aprender Javascript,
            lo que me ha permitido trabajar en equipo, empleando metodologías
            ágiles en un ambiente de incertidumbre.</p>
        </section>
        <footer className="footer">
          <span><i className="fab fa-github"></i></span>
          <span><i className="fab fa-facebook"></i></span>
          <span><i className="fab fa-linkedin-in"></i></span>
          <span><i className="fas fa-file-download"></i></span>
        </footer>
      </>
    );

  }
}

export default App;
