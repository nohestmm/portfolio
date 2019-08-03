import React, { Component } from 'react';
import './App.css';
import photo from './img/photo.jpeg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="top-div">
        </div>
        <header>
          <nav className="navbar">
          </nav>
        </header>
        <section className="bottom-div">
          <h1 className="name">NOHEMÍ MARTÍNEZ</h1>
          <h6 className= "text-bottom_name">{"<Front-end Developer/>"}</h6>
          <p className="paragraph">La programación siempre ha formado parte de mi formación académica, y Laboratoria me brindó la oportunidad de mejorar mis habilidades y aprender Javascript, lo que me ha permitido trabajar en equipo, empleando metodologias ágiles en un ambiente de incertidumbre.</p>
        </section>
        <div className="profile-photo"><img className="myphoto" src={photo} alt="" /></div>
        <footer></footer>
      </div>
    );

  }
}

export default App;
