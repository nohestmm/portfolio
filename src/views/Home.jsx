import React from 'react';
import Footer from '../components/Footer'
import photo from '../img/photo.jpeg';
import Header from '../components/Header';
import Asidemenu from '../components/Asidemenu';

const Home = () => {
  return (
    <>
    <Header active = { false } />
    <Asidemenu />
      <section className="profile-photo">
        <img className="myphoto" src={photo} alt="" />
      </section>
      <section className="bottom-div">
        <h1 className="name"><span>NOHEMÍ </span><span>MARTÍNEZ</span></h1>
        <h6 className="text-bottom_name">{"<Front-end Developer/>"}<span >&#160;</span></h6>
        <p className="paragraph">La programación siempre ha formado
          parte de mi formación académica, y Laboratoria me brindó la
          oportunidad de mejorar mis habilidades y aprender Javascript,
          lo que me ha permitido trabajar en equipo, empleando metodologías
      ágiles en un ambiente de incertidumbre.</p>
      </section>
      <Footer/>
    </>
  )
}
export default Home;