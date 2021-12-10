import React from "react";
import SelectionBox from "./SelectionBox.jsx";


class SelectionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {

    return (
      <div className='selection-row'>
        <h1>What type of Kombucha do you want to make?</h1>
        <div className="box-row">
        <SelectionBox title={'Juice'}/>
        <SelectionBox title={'Floral'}/>
        <SelectionBox title={'Classic'}/>
        </div>
      </div>
    );
  }
}

export default SelectionRow;