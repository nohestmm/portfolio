import React, { Component } from 'react';
import './App.css';
import photo from './img/photo.jpeg';

class App extends Component {
  render() {
    return (
      <div>

        <div className="top-div">
        </div><header>
          <nav className="navbar">
            soy el navbar
        </nav></header>
        <div className="bottom-div">
          <h1 className="name">NOHEMÍ MARTÍNEZ</h1>
          <h6>{"<Front-end Developer/>"}</h6>
          <p className= "paragraph">La programación siempre ha formado parte de mi formación académica, y Laboratoria me brindó la oportunidad de mejorar mis habilidades y aprender Javascript, lo que me ha permitido trabajar en equipo, empleando metodologias ágiles en un ambiente de incertidumbre.</p>
        </div>
        <div className="profile-photo"><img className="myphoto" src={photo} alt="" /></div>
      </div>
    );

  }
}

export default App;
