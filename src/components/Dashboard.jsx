import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  const maxSlots = 6;

  return (
    <StBox>
      <Title>나만의 포켓몬</Title>
      <CatchBoxContainer>
        {Array.from({ length: maxSlots }).map((_, index) => (
          <CatchBox key={index} $hasPokemon={!!selectedPokemons[index]}>
            {selectedPokemons[index] ? (
              <PokemonCard
                pokemon={selectedPokemons[index]}
                hideCatchButton={true} // '잡기' 버튼 숨기기
                hideRemoveButton={false} // '놓아주기' 버튼 보이기
                onRemove={() => removePokemon(selectedPokemons[index])} // 카드 삭제
              />
            ) : (
              <></> // 포켓볼만 보여줌
            )}
          </CatchBox>
        ))}
      </CatchBoxContainer>
    </StBox>
  );
};

const StBox = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  margin: 10px;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  margin: 0 auto;
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CatchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  gap: 20px; /* 카드 간 간격 */
  width: 100%;
`;

const CatchBox = styled.div`
  display: flex;
  background-image: ${({ $hasPokemon }) =>
    $hasPokemon
      ? "none"
      : "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png')"};
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  width: 120px;
  height: 120px;
  background-color: ${({ $hasPokemon }) => ($hasPokemon ? "transparent" : "white")};
  border-radius: 8px;
  border: ${({ $hasPokemon }) => ($hasPokemon ? "none" : "dashed gray")};
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 -1rem 0;
`;

export default Dashboard;
