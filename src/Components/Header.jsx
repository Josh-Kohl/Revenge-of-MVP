import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
    this.displayTemplate = this.displayTemplate.bind(this);
  }

  displayTemplate() {
    this.props.displayTemplate();
  }

  render() {

    return (
      <div className="header-bar">
        <h1>Kombucha Guide</h1>
        <h1>Make A New Brew</h1>
        <h1>View A Previous Batch</h1>
      </div>
    );
  }
}

export default Header;