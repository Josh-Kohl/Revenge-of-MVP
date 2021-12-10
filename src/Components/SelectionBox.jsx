import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //pass in value via props

  //pass in fx to update state with value

  render() {

    return (
      <div className='selection-box'>
        <h1 className="box-content">{this.props.title}</h1>
      </div>
    );
  }
}

export default SelectionBox;