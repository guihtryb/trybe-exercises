import React, { Component } from 'react'
import "../Pokemon.css"

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image} } = this.props;
    return (
      <div class="pokemon-card">
        <h2> Name: {name} </h2>
        <h3> Type: {type} </h3>
        <h4> Average weight: {averageWeight.value} {averageWeight.measurementUnit} </h4>
        <img src={image} alt="" />
      </div>
    );
  };
}
