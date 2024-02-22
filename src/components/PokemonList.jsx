import React from 'react'
import Pokemon from "./Pokemon"
import './PokemonList.css';

const PokemonList = ({ pokemon }) => {
    return (
        <div className="container">
            {pokemon.map(p => (
                <Pokemon pokemon={p} />
            ))}
        </div>
    )
}

export default PokemonList
