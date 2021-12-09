import React from "react";

class Template extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>I'm a Template</h1>
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