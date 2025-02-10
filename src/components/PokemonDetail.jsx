import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MockData from "./MockData";

const PokemonDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const pokemonId = queryParams.get("id");

        // MockData에서 포켓몬 ID에 해당하는 포켓몬 찾기
        const foundPokemon = MockData.find((pokemon) => pokemon.id === parseInt(pokemonId));

        if (foundPokemon) {
            setPokemon(foundPokemon);
        } else {
            console.error("해당 포켓몬을 찾을 수 없습니다.");
        }
    }, [location]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <PokemonDetaiContainer>
            <PokemonDetailBox>
            <PokemonName>{pokemon.korean_name} </PokemonName>
            <DividingLine>━━━━━━━━━━━━━━━━━━</DividingLine>
            <Img src={pokemon.img_url} alt={pokemon.korean_name} />
            <DetailContent>ID: {pokemon.id}</DetailContent>
            <DetailContent>{pokemon.description}</DetailContent>
            <GoBack onClick={() => navigate(-1)}>뒤로 가기</GoBack>
            </PokemonDetailBox>
        </PokemonDetaiContainer>
    );
};

const PokemonDetaiContainer = styled.div`
    background: linear-gradient(to bottom, #ffecc7, #f6de9c);
    width: 100%;
    height: 100vh;
    padding: 2rem;
`;

const GoBack = styled.button`
    background-color: #eca71e;
    width: 5.5rem;
    height: 2.3rem;
    margin-top: 2rem;
    text-align: center;
    border-radius: 2rem;
    color: white;
    font-weight: 600;
    box-shadow: 1px 1px 6px rgba(167, 111, 38, 0.8);
    cursor: pointer;
`;

const PokemonDetailBox = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 2px 2px 10px rgba(241, 169, 81, 0.3);
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin: 1.3rem auto;
    border-radius: 2rem;
    align-items: center;
    
`;

const Img = styled.img`
    width: 15rem;
    padding: 0 auto;
`;

const PokemonName = styled.h2`
    color: #eca71e;
    font-size: 2.5rem;
    margin: 2rem;
    font-weight: 600;
    text-align: center;
`;

const DividingLine = styled.span`
        color: rgb(236, 167, 30);
`;

const DetailContent = styled.p`
    color: #ce842b;
    font-size: 1.3rem;
    margin: 1rem;
`;

export default PokemonDetail;
