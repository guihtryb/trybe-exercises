import React, { Component } from 'react';
import '../PokemonCard.css';

class PokemonCard extends Component {
    render() {
        const { pokemon: {name, type, averageWeight, image, moreInfo} } = this.props;
        return(
          <div className='pokemon-card' >
            <img src={image} alt={'Pokemons.png'} />
            <h3>{name}</h3>
            <hr/>
            <h4>{type}</h4>
            <h4>averageWeight: {averageWeight.value}{averageWeight.measurementUnit}</h4>
            <p>Learn more: <a href={moreInfo} target="_blank" rel="noreferrer"> {name} </a> </p>
          </div>    
        );
    }

};

export default PokemonCard;