import React from 'react'
import ProgressBar from "./ProgressBar"

const PokemonInfo = ({ pokemonInfo }) => {
    return (
        <div>
            <h3>Type: {pokemonInfo.types[0].type.name}</h3>
            {pokemonInfo.stats.map(p => (
                //<p>{p.stat.name}: {p.base_stat}</p>
                <ProgressBar statName = {p.stat.name} baseStat = {p.base_stat}/>
            ))}
        </div>
    )
}
export default PokemonInfo
