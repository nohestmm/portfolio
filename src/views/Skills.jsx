import React from 'react';
import Header from '../components/Header'


const Skills = ({ active }) => {

  return (
    <>


      <Header main={active} />
      <h1 className="title-otherviews">Skills</h1>
      <section className="content-skills">
        <div className="content-firsticonskills">
          <div><i className="fab fa-js-square"></i></div>
          <div><i className="fab fa-html5"></i></div>
          <div><i className="fab fa-css3-alt"></i></div>
          <div><i className="fab fa-node"></i></div>
        </div>
        <div className="content-secondiconskills">
        <div><i className="fab fa-git"></i></div>
        <div><i className="fab fa-npm"></i></div>
        <div><i className="fab fa-react"></i></div>
        <div><img className="icon-firebase" src="https://img.icons8.com/color/96/000000/firebase.png" alt="icon-firebase" /></div>
        </div>
      </section>
    </>

  )

}
export default Skills;