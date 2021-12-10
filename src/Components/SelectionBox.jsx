import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.passValueToParent = this.passValueToParent.bind(this);
  }

  passValueToParent() {
    this.props.click(this.props.value);
    this.setState({selected: !this.state.selected})
  }

  render() {

    let btn_id = this.state.selected ? "selected" : "unselected";

    return (
      <div className='selection-box' id={btn_id} onClick={this.passValueToParent}>
        <h1 className="box-content">{this.props.title}</h1>
      </div>
    );
  }
}

export default SelectionBox;

