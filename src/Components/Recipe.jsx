import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props)
    return (
      <div className="recipe-table">
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
            <th>Unit</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>Water</td>
            <td>{this.props.recipe.water}</td>
            <td>ml</td>
            <td>Purified water. Avoid alkaline or pH balanced sources.</td>
          </tr>
          <tr>
            <td>Backslop</td>
            <td>{this.props.recipe.backslop}</td>
            <td>ml</td>
            <td>Take from previous batch of same flavor or classic recipe.</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{this.props.recipe.sugar}</td>
            <td>g</td>
            <td>none</td>
          </tr>
          <tr>
            <td>Tea</td>
            <td>{this.props.recipe.teaWeight}</td>
            <td>g</td>
            <td>Blend bases at will with combined weight of listed volume.</td>
          </tr>
        </table>

      </div>
    );
  }
}

export default Recipe;

//Display a clean document with results of recipe creation.