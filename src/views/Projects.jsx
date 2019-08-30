import React from 'react';
import Header from '../components/Header'
import mdlinks from '../img/mdlinks.jpg'
import pokedata from '../img/pokedata.jpg'
import moviesproject from '../img/moviesproject.jpg'
import pinterest from '../img/pinterest.jpg'


const Projects = ({active}) =>{
   
 
    return( 
        <>

        <Header main={active}/>
      <h1 className="title-otherviews">Projects</h1>
      <section className="content-project">
        <div><img src={mdlinks} alt="mdlinks"/></div>
        <div><img src={pokedata} alt="pokedata"/></div>
        <div><img src={moviesproject} alt="movies"/></div>
        <div><img src={pinterest} alt="pinterest"/></div>
      </section>
</>
  
       

 )
    
}
export default Projects;
