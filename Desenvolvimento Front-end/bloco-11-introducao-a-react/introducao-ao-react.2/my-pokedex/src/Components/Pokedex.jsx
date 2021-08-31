import React, { Component } from 'react'
import Pokemon from "./Pokemon";
import pokemons from "../data";


export default class Pokedex extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div class="pokemon-container">
          {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}
