import React from "react";

class Header extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>I'm a Header</h1>
      </div>
    );
  }
}

export default Header;