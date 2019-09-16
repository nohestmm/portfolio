import React from 'react';
import Navbarmain from './Navbarmain';
import Name from '../components/Name'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      hidden: true,
      view: this.props.active
    }
    this.showbar = this.showbar.bind(this);
    this.closebar = this.closebar.bind(this);
    this.viewName = this.viewName.bind(this);
    this.noview = this.noview.bind(this)
  }
  showbar(){
    this.setState({ show: true })
    
  }
  closebar()
    {
    this.setState({ show: false })
   
  }
  viewName(){
    this.setState({view: true})
  }
  noview(){
    this.setState({view:false})
  }
  render() {
    return (
      <header className="content-top">
        <div className="content-header "> 
        <div>
          <Name show = { this.state.view} />
          </div>
          <div onClick={() => !this.state.show ?
            this.showbar(this.state.show) :
            this.closebar(this.state.show)}
            className={this.state.show ? "content-bars hidden-times" : "content-bars show-times"}>

            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div
          onClick={() => 
          !this.state.show ?
            this.showbar(this.state.show) :
            this.closebar(this.state.show)}
          className={this.state.show ? "content-bars show-times" : "content-bars hidden-times"}>
          <i className="fas fa-times"></i>
        </div>
        <Navbarmain
          show={this.state.show}
          hidden={this.closebar}
        view={ this.viewName }
        noview={this.noview}
        />
      </header>
    )
  }
}
export default Header;