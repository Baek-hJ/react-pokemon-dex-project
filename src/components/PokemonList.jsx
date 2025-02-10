import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MockData from "./MockData";

const PokemonList = ({ addPokemon }) => {
    return (
        <ListContainer>
            {MockData.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    addPokemon={addPokemon} // '잡기' 버튼 처리
                    hideCatchButton={false} // '잡기' 버튼 보이기
                    hideRemoveButton={true} // '놓아주기' 버튼 숨기기
                />
            ))}
        </ListContainer>
    );
};

const ListContainer = styled.div`
  background-color: #ffdfad;
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
`;

export default PokemonList;
