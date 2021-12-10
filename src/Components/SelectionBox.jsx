import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.passValueToParent = this.passValueToParent.bind(this);
  }

  //pass in value via props

  //pass in fx to update state with value

  passValueToParent() {
    this.props.click(this.props.value);

  }

  render() {

    return (
      <div className='selection-box' >
        <h1 className="box-content">{this.props.title}</h1>
        <button onClick={this.passValueToParent}>select</button>
      </div>
    );
  }
}

export default SelectionBox;