import React from 'react';
import Header from '../components/Header'


const Skills = ({active}) =>{
 
    return( 
      <>

  
        <Header main={active}/>
        <h1 className="title-otherviews">Skills</h1>
        <section className="content-skills">
        <div><i className="fab fa-js-square"></i></div>
        <div><i className="fab fa-node"></i></div>
        <div><i className="fab fa-html5"></i></div>
        <div><i className="fab fa-css3-alt"></i></div> 
        <div><i className="fab fa-git"></i><i className="fab fa-git-alt"></i></div>
        <div><i className="fab fa-npm"></i></div>
        <div><i className="fab fa-react"></i></div>
        <div><img src="https://img.icons8.com/color/96/000000/firebase.png" alt="icon-firebase"/></div>
        </section>
        </>

 )
    
}
export default Skills;