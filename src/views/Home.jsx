import React from 'react';
import Header from '../components/Header'
import photo from '../img/photo.jpeg';


const Home =()=>{
  
   
    return( 
    <>
   <Header/>
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
    <a href="https://github.com/nohestmm?tab=repositories" target="blank"><i className="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/nohestmm/"><i className="fas fa-envelope"></i></a>
    <a href="https://www.linkedin.com/in/nohestmm/"><i className="fab fa-linkedin-in"></i></a>
    <span><i className="fas fa-file-download"></i></span>
  </footer>
 </> 
 )
    
}
export default Home;
