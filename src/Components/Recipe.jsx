import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.renderRecipe = this.renderRecipe.bind(this);
  }

  renderRecipe() {
    if (this.props.recipe.type === 'juicy') {
      return (
        <ol>
          <li>Add {this.props.recipe.water}ml of desired fruit juice to a disinfected glass brewing vessel.</li>
          <li>Add {this.props.recipe.backslop}ml of previous batch to juice.</li>
          <li>Add scoby to brew. Ensure that it covers at least 25% of the surface.</li>
          <li>Cover and secure vessel with a breathable cloth.</li>
          <li>Incubate at roughly 82F till pH reaches 4-3.5 or to taste.</li>
          <li>For a carbonated brew transfer to a fermentation grade airtight vessel for the last 48hrs.</li>
          <li>Refrigerate and enjoy!</li>
        </ol>
      );
    } else if (this.props.recipe.type === 'floral') {
      return (
        <ol>
          <li>Make a sweetened tea with {this.props.recipe.water}ml purified water, {this.props.recipe.sugar}g sugar, and {this.props.recipe.teaWeight}g desired tea blend.</li>
          <li>Add cooled tea to a disinfected glass brewing vessel.</li>
          <li>Add {this.props.recipe.backslop}ml of previous batch.</li>
          <li>Add scoby and ensure that it covers at least 25% of the surface.</li>
          <li>Cover and secure vessel with a breathable cloth.</li>
          <li>Incubate at roughly 82F till pH reaches 3.5-4 or to taste.</li>
          <li>For a carbonated brew transfer to an airtight fermentation grade vessel for the last 48hrs.</li>
          <li>Refrigerate and enjoy!</li>
        </ol>
      );
    } else if (this.props.recipe.type === 'classic') {
      return (
        <ol>
          <li>Make a sweetened tea with {this.props.recipe.water}ml purified water, {this.props.recipe.sugar}g sugar, and {this.props.recipe.teaWeight}g decaffeinated black or green tea.</li>
          <li>Add cooled tea to a disinfected glass brewing vessel.</li>
          <li>Add {this.props.recipe.backslop}ml of previous batch.</li>
          <li>Add scoby and ensure that it covers at least 25% of the surface.</li>
          <li>Cover and secure vessel with a breathable cloth.</li>
          <li>Incubate at roughly 82F till pH reaches 3.5-4 or to taste.</li>
          <li>For a carbonated brew transfer to an airtight fermentation grade vessel for the last 48hrs.</li>
          <li>Refrigerate and enjoy!</li>
        </ol>
      );
    }
  }


  render() {

    return (
      <div className="recipe-table">
        <h1>{this.props.recipe.recipeName}</h1><br></br>
        {this.renderRecipe()}
      </div>
    );
  }
}

export default Recipe;

