import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MockData from "./MockData";

const ListContainer = styled.div`
    background-color: #ffdfad;
    height: 100vh;
    margin: 0px;
    display: flex;
    flex-wrap: wrap; /* 줄 바꿈 허용 */
    justify-content: center; /* 가로 가운데 정렬 */
    gap: 16px; /* 카드 사이 간격 */
    padding: 20px;
`;




const PokemonList = () => {
    return (
        <ListContainer>
            {MockData.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </ListContainer>
    );
};

export default PokemonList;
