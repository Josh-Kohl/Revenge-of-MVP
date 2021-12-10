import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.passValueToParent = this.passValueToParent.bind(this);
  }

  passValueToParent() {
    this.props.click(this.props.value);
  }

  render() {
    return (
      <div className='selection-box' onClick={this.passValueToParent}>
        <h1 className="box-content">{this.props.title}</h1>
      </div>
    );
  }
}

export default SelectionBox;