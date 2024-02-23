import { useState, useEffect } from 'react'
import axios from "axios"

import PokemonInfo from "./PokemonInfo"

const Pokemon = ({ pokemon }) => {

    const [pokemonImage, setPokemonImage] = useState("")
    const [pokeIndex, setPokeIndex] = useState()
    const [averageColor, setAverageColor] = useState("")
    const [pokemonInfo, setPokemonInfo] = useState("")
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        let cancel
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { // get the image url for the pokemon
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPokemonImage(res.data.sprites.other.dream_world.front_default) // set pokemon image to pokemonImage
            setPokeIndex(res.data.id) // set pokemon id
            setPokemonInfo(res.data) // get data of pokemon
        }).catch(error => {
            if (!axios.isCancel(error)) {
                console.error("Error fetching Pokémon:", error);
            }
        });

        return () => cancel()

    }, [pokemon])

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = pokemonImage;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            let totalR = 0, totalG = 0, totalB = 0;

            for (let i = 0; i < imageData.length; i += 4) {
                totalR += imageData[i];
                totalG += imageData[i + 1];
                totalB += imageData[i + 2];
            }

            const numPixels = imageData.length / 4;
            const avgR = Math.round(totalR / numPixels) + 100;
            const avgG = Math.round(totalG / numPixels) + 100;
            const avgB = Math.round(totalB / numPixels) + 100;

            const color = `rgb(${avgR}, ${avgG}, ${avgB})`;
            setAverageColor(color);
        };
    }, [pokemonImage]);

    function getPokemonInfo() {
        console.log(pokemonInfo);
        setShowData(prevState => !prevState)
    }

    if (showData) {
        return (
            <div className="grid-item" style={{ backgroundColor: "#FFFEFC"}}>
                <button onClick={getPokemonInfo}>
                    <PokemonInfo pokemonInfo = {pokemonInfo} averageColor = {averageColor}/>
                </button>
            </div>
        )
    }

    return (
        <div className="grid-item" style={{ backgroundColor: averageColor }}>
            <button onClick={getPokemonInfo}>
                <h3 className = "title">{pokemon}</h3>
                <img
                    width={250}
                    height={250}
                    src={pokemonImage}
                />
                <p className = "index">#{pokeIndex}</p>
            </button>
        </div>
    )
}

export default Pokemon
