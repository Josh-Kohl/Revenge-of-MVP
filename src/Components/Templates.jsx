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
      teaWeight:undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }




  handleClick(e) {
    console.log('Event information from click: ',e);

  }


  render() {
    const { name } = this.props;
    return (
      <div className="template-parent">

        <h1>What type of Kombucha do you want to make?</h1>
        <div className="box-row">
        <SelectionBox title={'Juice'}/>
        <SelectionBox title={'Floral'}/>
        <SelectionBox title={'Classic'}/>
        </div>

        <h1>How much do you want total?</h1>
        <div className="box-row">
        <SelectionBox title={'500ml'} value={500} click={this.handleClick}/>
        <SelectionBox title={'1L'} value={1000}/>
        <SelectionBox title={'4L'} value={4000}/>
        </div>

        <h1>How strong do you want the base flavor to be?</h1>
        <div className="box-row">
        <SelectionBox title={'low'} value={.013}/>
        <SelectionBox title={'med'} value={.05}/>
        <SelectionBox title={'high'} value={.1}/>
        </div>

        <h1>How sour do you want the final brew?</h1>
        <div className="box-row">
        <SelectionBox title={'low'} value={.1}/>
        <SelectionBox title={'med'} value={.12}/>
        <SelectionBox title={'high'} value={.2}/>
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


// State {
//   totalVolume: 1000,
//   water: this.state.total - backslop,
//   sugar: .,
//   backslop: this.state.total / 10,
//   teaWeight:
// }