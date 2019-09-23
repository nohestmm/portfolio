import React from 'react';
import Iconfirebase from '../img/Iconfirebase.svg';
import Header from '../components/Header';
import Asidemenu from '../components/Asidemenu';

const Skills = () => {

  return (
    <>
    <Header active = { true } />
    <Asidemenu/>
      <section className="content-skills">
        <h1 className="title-SkillProjects">Skills</h1>
        <div className="content-iconskills">
          <div className="content-icondetails" data-aos="flip-up">
            <i className="fab fa-js-square"></i>
            <p>Javascript</p>
          </div>
          <div className="content-icondetails" data-aos="flip-up">
            <i className="fab fa-html5"></i>
            <p>Html5</p>
          </div>
          <div className="content-icondetails">
            <i className="fab fa-css3-alt"></i>
            <p>CSS3</p></div>
          <div className="content-icondetails">
            <i className="fab fa-node"></i>
            <p>Node.js</p>
          </div>
        </div>
        <div className="content-iconskills">
          <div className="content-icondetails">
            <i className="fab fa-git"></i>
            <p>Github</p>
          </div>
          <div className="content-icondetails">
            <i className="fab fa-npm"></i>
            <p>NPM</p>
          </div>
          <div className="content-icondetails">
            <i className="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="content-icondetails">
            <img className="icon-firebase" src={Iconfirebase} alt="icon-firebase" />
            <p>Firebase</p>
          </div>
        </div>
      </section>
    
    </>

  )

}
export default Skills;