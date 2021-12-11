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
        0: ['What type of Kombucha do you want to make?', ['Juicy', 'juicy'], ['Floral', 'floral'], ['Classic', 'classic']], //type
        1: ['How much do you want to make?', ['500ml', 500], ['1000ml', 1000], ['4000ml', 4000]], //volume
        2: ['How strong do you want the base flavor to be?', ['Mild', .013], ['Balanced', .05], ['Strong', .1]], //strength
        3: ['How sour do you want the final brew?',['Refined', .1], ['Mellow', .12],  ['Pucker', .2]]  //brix
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateRecipe = this.calculateRecipe.bind(this);
    this.calculateSugar = this.calculateSugar.bind(this);
    this.renderSelections = this.renderSelections.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
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

    if(currentKey < 3) {
      let newKey = currentKey + 1;
      console.log('changed selection')
      this.setState({
        selectionKey: newKey
      })

      this.renderSelections()
    }

  }

  renderSelections() {
    let selectionKey = this.state.selectionKey;
    let values = this.state.selections[selectionKey];

    return (
      <SelectionRow click={this.handleClick} values={values}/>
    );
  }

  render() {

    return (
      <div className="template-parent">
        ${this.renderSelections()}

        <h1 onClick={this.changeSelection}>Continue</h1>

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

