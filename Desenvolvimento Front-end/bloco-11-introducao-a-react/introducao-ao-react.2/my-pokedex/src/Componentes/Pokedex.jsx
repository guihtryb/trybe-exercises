import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import Pokemons from "../data";
import '../Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <main className="pokedex" >
          { Pokemons.map((pokemon) => (<PokemonCard pokemon={pokemon} key={pokemon.id}/>)) }
      </main>
    );
  }
}

export default Pokedex;