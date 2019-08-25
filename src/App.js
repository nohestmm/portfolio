import React from 'react';
import './App.css';
// import Header from './components/Header'
// import Navbarmain from './components/Navbarmain';
// import photo from './img/photo.jpeg';
import Home from './views/Home'
import '../node_modules/@fortawesome/fontawesome-free/js/all'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     show: false
  //   }
  //   this.showNavbar = this.showNavbar.bind(this);
  //   this.closeNavbar = this.closeNavbar.bind(this);
  // }
  // showNavbar() {
  //   this.setState({ show: true })
  //   console.log(this.state.show)
  // }
  // closeNavbar() {
  //   this.setState({ show: false })
  //   console.log(this.state.show)
  // }
  render() {
    return (
      <>
    {/* <header className="top-div">
    <div onClick={() => this.showNavbar(this.state.show)}
      className={this.state.show ? "display-none" : "content-bars"}>
      <i className="fas fa-bars"></i>
    </div>
    <Navbarmain
      show={this.state.show}
      hidden={this.closeNavbar}
    /> */}

  <Home/>
        {/* <header className="top-div">
          <div onClick={() => this.showNavbar(this.state.show)}
            className={this.state.show ? "display-none" : "content-bars"}>
            <i className="fas fa-bars"></i>
          </div>
          <Navbarmain
            show={this.state.show}
            hidden={this.closeNavbar}
          />
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
          <span><i className="fas fa-envelope"></i></span>
          <span><i className="fab fa-linkedin-in"></i></span>
          <span><i className="fas fa-file-download"></i></span>
        </footer> */}
      </>
    );
  }
}
export default App;
