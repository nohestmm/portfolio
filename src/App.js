import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './components/Header'
// import Navbarmain from './components/Navbarmain';
// import photo from './img/photo.jpeg';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
const App =()=> {

  
    return (
      
      <BrowserRouter>
    
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={()=> <Home active={false}/>}/>
        <Route path='/projects' component={() => <Projects active={true}/>}/>
        <Route path='/skills' component={()=> <Skills active={true}/>}/>
      </Switch>
  
</BrowserRouter>

 
)
}
export default App;
