import React from "react";

class Template extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>I'm a Template</h1>
      </div>
    );
  }
}

export default Template;