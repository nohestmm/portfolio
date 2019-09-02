import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header'


const App =(props)=> {
    console.log('initial history is: ', JSON.stringify(window.history))
      return (
      <Router>
      <Header/>
        <Switch> 
        <Route exact path="/" component= {Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
       </Switch>

</Router>

)
}
export default App;
