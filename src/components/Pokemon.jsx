import { useState, useEffect } from 'react'
import axios from "axios"

const Pokemon = ({ pokemon }) => {

    const [pokemonImage, setPokemonImage] = useState("")

    useEffect(() => {
        let cancel
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { // get the image url for the pokemon
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPokemonImage(res.data.sprites.front_default) // set pokemon image to pokemonImage
        }).catch(error => {
            if (!axios.isCancel(error)) {
                console.error("Error fetching Pokémon:", error);
            }
        });

        return () => cancel()

    }, [pokemon])

    return (
        <div>
            {pokemon}
            <img
                width={150}
                height={150}
                src={pokemonImage}
            />
        </div>
    )
}

export default Pokemon
