import React from 'react'
import Pokemon from "./Pokemon"
import './PokemonList.css';

const PokemonList = ({ pokemon }) => {
    return (
        <div className="container">
            {pokemon.map(p => (
                <div className="grid-item">
                    <Pokemon pokemon={p} />
                </div>
            ))}
        </div>
    )
}

export default PokemonList
