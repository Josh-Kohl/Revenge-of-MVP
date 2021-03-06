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

      selectionKey: 0,
      selections: {
        0: ['What type of Kombucha do you want to make?', ['type', 'Juicy', 'juicy'], ['type', 'Floral', 'floral'], ['type', 'Classic', 'classic']], //type
        1: ['How much do you want to make?', ['totalVolume', '500ml', 500], ['totalVolume', '1000ml', 1000], ['totalVolume', '4000ml', 4000]], //volume
        2: ['How strong do you want the base flavor to be?', ['teaStrength', 'Mild', .013], ['teaStrength', 'Balanced', .05], ['teaStrength', 'Strong', .1]], //strength
        3: ['How sour do you want the final brew?',['degreesBrix', 'Refined', .1], ['degreesBrix', 'Mellow', .12],  ['degreesBrix', 'Pucker', .2]]  //brix
      },

      displayRecipe: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateRecipe = this.calculateRecipe.bind(this);
    this.calculateSugar = this.calculateSugar.bind(this);
    this.renderSelections = this.renderSelections.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.renderRecipe = this.renderRecipe.bind(this);
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
      teaWeight: teaWeight,
      displayRecipe: true
    })
  }

  componentDidMount() {
    this.renderSelections()
  }

  handleClick(e) {
    this.setState({
      [e.field]: e.value
    })
  }

  handleChange(event) {
    this.setState({recipeName: event.target.value});
  }

  changeSelection() {
    let currentKey = this.state.selectionKey;

    if(currentKey < 4) {
      let newKey = currentKey + 1;
      console.log('changed selection')
      this.setState({
        selectionKey: newKey
      })

      this.renderSelections()
    } else if (currentKey === 4) {
      this.calculateRecipe()
    }

  }

  renderSelections() {
    let selectionKey = this.state.selectionKey;
    let values = this.state.selections[selectionKey];

    //if at end of selections render name input
    if (selectionKey === 4) {
      return (
        //name recipe
        <div>
          <h1>Name Your Recipe</h1>
          <form>
            <label>
              <input type="text" name="name" />
            </label>
          </form>
        </div>
      );
    }

    return (
      <SelectionRow click={this.handleClick} values={values}/>
    );
  }

  //create lightswitch in state for displaying results
  renderRecipe() {
    if(this.state.displayRecipe) {
      return (
        <Recipe recipe={this.state}/>
        );
    }
  }

  render() {

    return (
      <div className="template-parent">
        {this.renderSelections()}

        <h1 onClick={this.changeSelection}>Continue</h1>

        <br></br>
        <br></br>

        {/* <Recipe recipe={this.state}/> */}
        {this.renderRecipe()}

      </div>
    );
  }
}

export default Template;

