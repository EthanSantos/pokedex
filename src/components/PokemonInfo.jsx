import React from 'react'
import ProgressBar from "./ProgressBar"

const PokemonInfo = ({ pokemonInfo, averageColor }) => {
    return (
        <div>
            <h3 className = "type" style={{ color: averageColor}}>base stats</h3>
            {pokemonInfo.stats.map(p => (
                //<p>{p.stat.name}: {p.base_stat}</p>
                <ProgressBar statName = {p.stat.name} baseStat = {p.base_stat} averageColor = {averageColor}/>
            ))}
        </div>
    )
}
export default PokemonInfo
