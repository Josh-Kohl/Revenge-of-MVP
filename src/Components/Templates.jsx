import React from "react";
import SelectionBox from "./SelectionBox.jsx";
import SelectionRow from "./SelectionRow.jsx"

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: 'my brew',
      type: undefined,
      totalVolume: undefined,
      backslop: undefined,
      water: undefined,
      sugar: undefined,
      teaStrength: undefined,
      teaWeight:undefined,
      degreesBrix: undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //console.log('Event information from click: ');
    this.setState({
      [e.field]: e.value
    })
  }

  render() {
    const { name } = this.props;
    return (
      <div className="template-parent">

        <h1>What type of Kombucha do you want to make?</h1>
        <div className="box-row">
        <SelectionBox title={'Juicy'} value={{field: 'type', value: 'juice'}} click={this.handleClick}/>
        <SelectionBox title={'Floral'} value={{field: 'type', value: 'floral'}} click={this.handleClick}/>
        <SelectionBox title={'Classic'} value={{field: 'type', value: 'classic'}} click={this.handleClick}/>
        </div>

        <h1>How much do you want total?</h1>
        <div className="box-row">
        <SelectionBox title={'500ml'} value={{field: 'totalVolume', value: 500}} click={this.handleClick}/>
        <SelectionBox title={'1L'} value={{field: 'totalVolume', value: 1000}} click={this.handleClick}/>
        <SelectionBox title={'4L'} value={{field: 'totalVolume', value: 4000}} click={this.handleClick}/>
        </div>

        <h1>How strong do you want the base flavor to be?</h1>
        <div className="box-row">
        <SelectionBox title={'low'} value={{field: 'teaStrength', value: .013}} click={this.handleClick}/>
        <SelectionBox title={'med'} value={{field: 'teaStrength', value: .05}} click={this.handleClick}/>
        <SelectionBox title={'high'} value={{field: 'teaStrength', value: .1}} click={this.handleClick}/>
        </div>

        <h1>How sour do you want the final brew?</h1>
        <div className="box-row">
        <SelectionBox title={'low'} value={.1} value={{field: 'degreesBrix', value: .1}} click={this.handleClick}/>
        <SelectionBox title={'med'} value={{field: 'degreesBrix', value: .12}} click={this.handleClick}/>
        <SelectionBox title={'high'} value={{field: 'degreesBrix', value: .2}} click={this.handleClick}/>
        </div>

        <h1>Name Your Recipe</h1>
        <div className="box-row">
        <input value={this.state.recipeName} ></input>
        </div>

      </div>
    );
  }
}

export default Template;

//What type do you want to make?
  //Juice || Floral || Classic
// How Much?
  //xml in 100ml increments
  //click +/- to increment
//How Strong do you want the base flavor to be? (skip if juice)
  //determines tea ratio
  //mild = 0.02
  //Balanced = .05
  //Strong = .1
//How sweet / acidic do you want it to be? *BX = sugar / (sugar + h20 + backslop)
  //refined = .10 degree bx
  //mellow = .12
  //pucker up = .18
//Name your recipe
