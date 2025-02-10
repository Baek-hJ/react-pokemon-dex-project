import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = ({ selectedPokemons, setSelectedPokemons }) => {
    const handleSelectPokemon = (pokemon) => {
        setSelectedPokemons((prev) => {
            if (prev.length >= 6) return prev; // 최대 6개 
            if (prev.some((p) => p.id === pokemon.id)) return prev; // 중복 방지
            if (prev.length >= 6) alert("포켓몬은 최대 6마리까지만 선택할 수 있습니다!");
            return [...prev, pokemon];
        });
    };

    const handleRemovePokemon = (pokemon) => {
        setSelectedPokemons((prev) => prev.filter((p) => p.id !== pokemon.id));
    };

    return (
        <div>
            <Dashboard
                selectedPokemons={selectedPokemons}
                removePokemon={handleRemovePokemon} // 여기 추가
            />
            <PokemonList addPokemon={handleSelectPokemon} />
        </div>
    );
};

export default Dex;
