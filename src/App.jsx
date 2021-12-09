import React from "react";
import Header from "./Components/Header.jsx"
import Templates from "./Components/Templates.jsx"
import Project from "./Components/Project.jsx"

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Ahoy Matey</h1>
        <Header/>
        <Templates/>
        <Project/>
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
