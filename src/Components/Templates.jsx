import React from "react";
import SelectionBox from "./SelectionBox.jsx";
import SelectionRow from "./SelectionRow.jsx"
import Recipe from "./Recipe.jsx"
import $ from 'jquery';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      type: undefined,
      totalVolume: undefined,
      degreesBrix: undefined,
      teaStrength: undefined,

      backslop: undefined,
      water: undefined,
      sugar: undefined,
      teaWeight:undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateRecipe = this.calculateRecipe.bind(this);
    this.calculateSugar = this.calculateSugar.bind(this);
  }

  calculateSugar() {
    let query = `${this.state.degreesBrix} = x/(x+${this.state.totalVolume})`;

    $.get('/wolfram', {query: query}, (data) => {
      this.setState({
        sugar: data,
      });
    });
  }

  calculateRecipe() {
    let backslop = this.state.totalVolume * .1;
    let water = this.state.totalVolume * .9;
    let teaWeight = this.state.totalVolume * this.state.teaStrength;

    this.calculateSugar();

    this.setState({
      backslop: backslop,
      water: water,
      teaWeight: teaWeight
    })
  }

  handleClick(e) {
    this.setState({
      [e.field]: e.value
    })
  }

  handleChange(event) {
    this.setState({recipeName: event.target.value});
  }

  render() {

    return (
      <div className="template-parent">

        <h2>What type of Kombucha do you want to make?</h2>
        <div className="box-row">
        <SelectionBox title={'Juicy'} value={{field: 'type', value: 'juice'}} click={this.handleClick}/>
        <SelectionBox title={'Floral'} value={{field: 'type', value: 'floral'}} click={this.handleClick}/>
        <SelectionBox title={'Classic'} value={{field: 'type', value: 'classic'}} click={this.handleClick}/>
        </div>

        <h2>How much do you want total?</h2>
        <div className="box-row">
        <SelectionBox title={'500ml'} value={{field: 'totalVolume', value: 500}} click={this.handleClick}/>
        <SelectionBox title={'1000ml'} value={{field: 'totalVolume', value: 1000}} click={this.handleClick}/>
        <SelectionBox title={'4000ml'} value={{field: 'totalVolume', value: 4000}} click={this.handleClick}/>
        </div>

        <h2>How strong do you want the base flavor to be?</h2>
        <div className="box-row">
        <SelectionBox title={'low'} value={{field: 'teaStrength', value: .013}} click={this.handleClick}/>
        <SelectionBox title={'med'} value={{field: 'teaStrength', value: .05}} click={this.handleClick}/>
        <SelectionBox title={'high'} value={{field: 'teaStrength', value: .1}} click={this.handleClick}/>
        </div>

        <h2>How sour do you want the final brew?</h2>
        <div className="box-row">
        <SelectionBox title={'low'} value={.1} value={{field: 'degreesBrix', value: .1}} click={this.handleClick}/>
        <SelectionBox title={'med'} value={{field: 'degreesBrix', value: .12}} click={this.handleClick}/>
        <SelectionBox title={'high'} value={{field: 'degreesBrix', value: .2}} click={this.handleClick}/>
        </div>

        <div className="box-row">
        </div>
          <p id='recipe-title'>Name Your Recipe</p>
          <input id='input' type='text' value={this.state.recipeName} onChange={this.handleChange} ></input>

        <div>
          <button onClick={this.calculateRecipe}>Calculate</button>
        </div>
        <br></br>
        <br></br>
        <Recipe recipe={this.state}/>

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
