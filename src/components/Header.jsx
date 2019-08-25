import React from 'react';
import Navbarmain from './Navbarmain'
class Header extends React.Component{
constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.showNavbar = this.showNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }
  showNavbar() {
    this.setState({ show: true })
    console.log(this.state.show)
  }
  closeNavbar() {
    this.setState({ show: false })
    console.log(this.state.show)
  }
  render() {
    return (
    
    <header className="top-div">
    <div onClick={() => this.showNavbar(this.state.show)}
      className={this.state.show ? "display-none" : "content-bars"}>
      <i className="fas fa-bars"></i>
    </div>
    <Navbarmain
      show={this.state.show}
      hidden={this.closeNavbar}
    />
  </header>
  )
  }
  }
  export default Header;