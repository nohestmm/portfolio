import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './components/Header'
// import Navbarmain from './components/Navbarmain';
// import photo from './img/photo.jpeg';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
class App extends React.Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={() => <Projects active={true}/>}/>
        <Route path='/skills' component={()=> <Skills active={true}/>}/>
        <Route component= {()=>(
          <h1>Error 404</h1>
          )}/>
      </Switch>
    </Router>

    );
  }
}
export default App;
