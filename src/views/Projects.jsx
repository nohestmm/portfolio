import React from 'react';
import Preview from '../components/Preview'
import Header from '../components/Header'
import data from '../Data/data'
import Asidemenu from '../components/Asidemenu';



class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      imagePreview: '',
    }
    this.showpreview = this.showpreview.bind(this)
    this.hiddenpreview = this.hiddenpreview.bind(this)
  }
  showpreview(img) {
    this.setState({ show: true })
    this.setState({ imagePreview: img })

  }
  hiddenpreview = () => {
    this.setState({ show: false })
  }
  render() {

    return (
      <>
        <Header active={true} />
        <Asidemenu />
        <section className="content-project">
          <h1 className="title-SkillProjects">Portfolio</h1>
          <div className="content-rawprojects">
            {
              data.map((el, index) =>
                <div className="content-iconprojects" key={index}>
                  <div className="content-projectsdetails">
                    <img className="img-projects" src={el.image} alt={el.title} />
                  </div>
                  <div className="icons-bottomproject">
                    <a className="rombo-icon"
                      href={el.url}
                      target="blank"
                      title={el.description}>
                      <i className="fas fa-link"></i>
                    </a>
                    <span className="rombo-icon" onClick={() => this.showpreview(el.image)}>
                      <i className="fas fa-search"></i>
                    </span>
                    <a className="rombo-icon"
                      href={el.github}
                      target="blank"
                      title={el.description}>
                      <i className="fab fa-github rotate-icon"></i>
                    </a>
                  </div>
                </div>
              )
            }
          </div>
          <Preview
            show={this.state.show}
            imageProject={this.state.imagePreview}
            hidden={this.hiddenpreview} />
        </section>

      </>
    )
  }
}
export default Projects;
