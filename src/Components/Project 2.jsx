import React from "react";

class Project extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>I'm a Project</h1>
      </div>
    );
  }
}

export default Project;