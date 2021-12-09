import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Ahoy Matey</h1>
      </div>
    );
  }
}

export default App;
