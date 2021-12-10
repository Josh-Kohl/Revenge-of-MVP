import React from "react";
import Header from "./Components/Header.jsx"
import Templates from "./Components/Templates.jsx"
import Project from "./Components/Project.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'template' //Can be template, project, or
    };
    this.renderComponent = this.renderComponent.bind(this);
    this.displayTemplate = this.displayTemplate.bind(this);
    this.displayProject = this.displayProject.bind(this);
  }

  displayTemplate() {
    this.setState({
      display: 'template'
    })
  }

  displayProject() {
    this.setState({
      display: 'project'
    })
  }

  componentDidMount() {
  }

  renderComponent() {
    if (this.state.display === 'template') {
      return <Templates/>
    } else if (this.state.display === 'project') {
      return <Project/>
    }
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <Header displayProject={this.displayProject} displayTemplate={this.displayTemplate}/>
        <hr/>
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;


//Show hide templates on sidebar? up top?
//Choose a template recipe
  //Choose a target volume
  //Preset ingredients with option to change
    //On submit => POST to recipes db

//Choose previous recipe
  //List of brews with date and score?
  //Also list progress updates
  //Option to Post update
  //Save as template?
