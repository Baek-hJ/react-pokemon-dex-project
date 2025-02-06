import styled from "styled-components";

const PokemonCard = ({pokemon }) => {
  return (
      <CardContainer>
      <img src={pokemon .img_url} alt={pokemon .korean_name}/>
      <h2 >{pokemon .korean_name}</h2>
      <p >ID: {pokemon .id}</p>
      <button>잡기</button>
      </CardContainer>
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


export default PokemonCard;