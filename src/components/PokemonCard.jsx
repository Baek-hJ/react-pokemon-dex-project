import styled from "styled-components";

const PokemonCard = ({pokemon, hideCatchButton, addPokemon }) => {
  return (
      <CardContainer>
      <img src={pokemon .img_url} alt={pokemon .korean_name}/>
      <h2 >{pokemon .korean_name}</h2>
      <p >ID: {pokemon .id}</p>
      
      {!hideCatchButton && (
        <CatchBtn onClick={() => addPokemon(pokemon)}>잡기</CatchBtn>
      )}      </CardContainer>
  )
};

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  width: 140px;
  height: 220px;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;            

const CatchBtn = styled.button`
  
`;


export default PokemonCard;
