import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


const App =(props)=> {
    console.log('initial history is: ', JSON.stringify(window.history))
  
    return (
      <Router>
  
      <Switch> 
        <Route exact path="/" component={()=> <Home active={false}/>}/>
        <Route exact path="/projects" component={() => <Projects active={true}/>}/>
        <Route exact path="/skills" component={()=> <Skills active={true}/>}/>
       </Switch>

</Router>

)
}
export default App;
