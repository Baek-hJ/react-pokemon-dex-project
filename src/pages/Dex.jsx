// import React from 'react'

import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = ({addPokemon, selectedPokemons}) => {



    return (
        <div>
            <Dashboard selectedPokemons={selectedPokemons}/>
            <PokemonList addPokemon={addPokemon}/>
        </div>
    )
}

export default Dex;