import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = ({ selectedPokemons, setSelectedPokemons }) => {
  const handleSelectPokemon = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      alert("포켓몬은 최대 6마리까지만 선택할 수 있습니다!");
      return;
    }
    setSelectedPokemons((prev) => [...prev, pokemon]); // 포켓몬 추가
  };

  const handleRemovePokemon = (pokemon) => {
    setSelectedPokemons((prev) => prev.filter((p) => p.id !== pokemon.id)); // 포켓몬 삭제
  };

  return (
    <div>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={handleRemovePokemon}
        addPokemon={handleSelectPokemon} // 여기 추가
      />
      <PokemonList addPokemon={handleSelectPokemon} />
    </div>
  );
};

export default Dex;
