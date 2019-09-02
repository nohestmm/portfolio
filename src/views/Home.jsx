import React from 'react';
import Header from '../components/Header'
import photo from '../img/photo.jpeg';


const Home =()=>{
  
   
    return( 
    <>
   <Header/>
  <section className="profile-photo">
    <img className="myphoto" src={photo} alt="" />
    </section>
  <section className="bottom-div">
    <h1 className="name">NOHEMÍ MARTÍNEZ</h1>
    <h6 className="text-bottom_name">{"<Front-end Developer/>"}<span>&#160;</span></h6>
    <p className="paragraph">La programación siempre ha formado
      parte de mi formación académica, y Laboratoria me brindó la
      oportunidad de mejorar mis habilidades y aprender Javascript,
      lo que me ha permitido trabajar en equipo, empleando metodologías
      ágiles en un ambiente de incertidumbre.</p>
  </section>
  <footer className="footer">
    <a className ="footer-ancle" href="https://github.com/nohestmm?tab=repositories" target="blank"><i className="fab fa-github"></i></a>
    <a className ="footer-ancle" href="mailto:nohestmm@gmail.com" target="blank"><i className="fas fa-envelope"></i></a>
    <a className ="footer-ancle" href="https://www.linkedin.com/in/nohestmm/" target="blank"><i className="fab fa-linkedin-in"></i></a>
    <a className ="footer-ancle" href="https://drive.google.com/uc?id=10dn07QmIAxYo2HB3KrNwUUW5QRIfpsiY&export=download&authuser=0" target="blank"><i className="fas fa-file-download"></i></a>
  </footer>
 </> 
 )

}
export default Home;
