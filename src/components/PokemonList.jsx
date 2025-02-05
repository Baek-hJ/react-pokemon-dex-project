import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const IistBox = styled.div`
    background-color: aqua;
    height: 100vh;
    margin: 0px;
`;
const PokemonList = () => {
    return (
        <div>
        <IistBox>
        <PokemonCard />
        </IistBox>
        </div>
    )
}

export default PokemonList;