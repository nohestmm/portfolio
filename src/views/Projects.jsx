import React from 'react';
import mdlinks from '../img/mdlinks.jpg'
import pokedata from '../img/pokedata.jpg'
import moviesproject from '../img/moviesproject.jpg'
import pinterest from '../img/pinterest.jpg'
const Projects = () => {
  return (
    <>
          <h1 className="title-otherviews">Projects</h1>
      <section className="content-project">
        <div className="content-rawprojects">
          <div className="content-iconprojects">
            <div className="content-projectsdetails" onClick={() => this.showpreview(this.state.show)}>
              <img className="img-projects" src={pokedata} alt="pokedata" />
            </div>
            <div className="icons-bottomproject">
            <a className="rombo-icon"
             href="https://nohestmm.github.io/SCL009-data-lovers/src/index.html" 
             target="blank"
             title="Aplicación que permite conocer la primera generación de pokemones">
            <i className="fas fa-link"></i>
            </a>
            <span className="rombo-icon"><i className="fas fa-search"></i></span>
            </div>
          </div>
          <div className="content-iconprojects">
            <div className="content-projectsdetails">
              <img className="img-projects" src={moviesproject} alt="movies" />
            </div>
            <div className="icons-bottomproject">
            <a className="rombo-icon" 
            href="https://nohestmm.github.io/SCL009-hackathon-peliculas/src/index.html" 
            target="blank"
            title="Aplicación que permite conocer sagas de películas">
            <i className="fas fa-link"></i>
            </a>
            <span className="rombo-icon"><i className="fas fa-search"></i></span>
            </div>
          </div>
        </div>
        <div className="content-rawprojects">
          <div className="content-iconprojects">
            <div className="content-projectsdetails">
              <img className="img-projects" src={mdlinks} alt="mdlinks" />
            </div>
            <div className="icons-bottomproject">
              <a className="rombo-icon" 
              href="https://www.npmjs.com/package/md-links-nohestmm" 
              target="blank"
              title="Dependencia para leer archvios Markdown">
                <i className="fas fa-link"></i>
                </a>
              <span className="rombo-icon"><i className="fas fa-search"></i></span>
            </div>
          </div>
          <div className="content-iconprojects">
            <div className="content-projectsdetails">
              <img className="img-projects" src={pinterest} alt="pinterest" />
            </div>
            <div className="icons-bottomproject">
            <a className="rombo-icon" 
            href="https://nohestmm.github.io/SCL-009-Pinterest/" 
            target="blank"
            title="Replica de Pinterest version desktop">
              <i className="fas fa-link"></i>
              </a>
            <span className="rombo-icon"><i className="fas fa-search"></i></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects;
