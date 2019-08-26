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
    <header className={this.props.main ? "top-div color-header" :"top-div"}>
    <div onClick={() => this.showNavbar(this.state.show)}
      className={this.state.show ? "content-bars show-bars" : "content-bars hidden-bars"}>
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