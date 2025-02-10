import { useState } from 'react';
import Router from './shared/Router';

const App = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemons((prev) => {
      if (prev.length >= 6) return prev; // 최대 6개개
        if (prev.some((p) => p.id === pokemon.id)) return prev; // 중복 방지

      return [...prev, pokemon];
    });
  };

  const removePokemon = (pokemonToRemove) => {
    setSelectedPokemons((prev) => prev.filter((pokemon) => pokemon.id !== pokemonToRemove.id));
  };

  return (
    <div>
      <Router
        addPokemon={addPokemon}
        removePokemon={removePokemon}
        selectedPokemons={selectedPokemons}
        setSelectedPokemons={setSelectedPokemons}
      />
    </div>
  );
};

export default App;
