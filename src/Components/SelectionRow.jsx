import React from "react";
import SelectionBox from "./SelectionBox.jsx";


class SelectionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.passValueToParent = this.passValueToParent.bind(this);
  }

  passValueToParent() {
    this.props.click(this.props.value);
    this.setState({selected: !this.state.selected})
  }

  render() {
    return (
      <div className='selection-row'>
        <h2>{this.props.values[0]}</h2>
        <div className="box-row">
        <SelectionBox title={this.props.values[1][1]} value={{field: this.props.values[1][0], value: this.props.values[1][2]}} display={false} click={this.props.click}/>
        <SelectionBox title={this.props.values[2][1]} value={{field: this.props.values[2][0], value: this.props.values[2][2]}} display={false} click={this.props.click}/>
        <SelectionBox title={this.props.values[3][1]} value={{field: this.props.values[3][0], value: this.props.values[3][2]}} display={false} click={this.props.click}/>
        </div>
      </div>
    );
  }
}

export default SelectionRow;

