import React from 'react';
import Navbarmain from './Navbarmain';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      hidden: true
    }

    this.showbar = this.showbar.bind(this);
    this.closebar = this.closebar.bind(this);

    
  }
  showbar() {
    this.setState({ show: true })
    this.setState({ hidden: false })

  }
  closebar() {
    this.setState({ show: false })
    this.setState({ hidden: true })

  }

 

  render() {
    return (
      <header className="content-top">
        <div onClick={() => this.state.hidden ?
          this.showbar(this.state.show, this.state.hidden) :
          this.closebar(this.state.show, this.state.hidden)}
          className={this.state.show ? "content-bars hidden-times" : "content-bars show-times"}>
          <i className="fas fa-bars"></i>
        </div>
        <div
          onClick={() => this.state.hidden ?
            this.showbar(this.state.show, this.state.hidden) :
            this.closebar(this.state.show, this.state.hidden)}
          className={this.state.hidden ? "content-bars hidden-times" : "content-bars show-times"}>
          <i className="fas fa-times"></i>
        </div>
        <Navbarmain
          show={this.state.show}
          hidden={this.closebar}
        />
      </header>
    )
  }
}
export default Header;