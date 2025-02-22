import styled from "styled-components";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, hideCatchButton, addPokemon, hideRemoveButton, onRemove }) => {
  const handleCatchClick = (e) => {
    // addPokemon 함수 호출
    e.stopPropagation(); // 카드 클릭 이벤트가 발생하지 않도록 방지
    addPokemon(pokemon); // 포켓몬을 추가하는 함수 호출
  };

  return (
    <CardContainer>
      <Link to={`/pokemon-detail?id=${pokemon.id}`}> 
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>ID: {pokemon.id}</p>
      </Link>
      {!hideCatchButton && (
        <CatchBtn onClick={handleCatchClick}>잡기</CatchBtn>
      )}

      {!hideRemoveButton && (
        <RemoveBtn onClick={onRemove}>놓아주기</RemoveBtn>
      )}
    </CardContainer>
  );
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
  position: relative;
  cursor: pointer; /* 클릭 가능한 느낌 */
`;

const CatchBtn = styled.button`
  width: 2.7rem;
  height: 1.5rem;
  font-size: 15px;
  color: white;
  background-color: red;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

const RemoveBtn = styled.button`
  width: 4rem;
  height: 1.5rem;
  font-size: 15px;
  color: white;
  background-color: red;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default PokemonCard;
