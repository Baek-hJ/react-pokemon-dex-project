import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({selectedPokemons}) => {
    const maxSlots = 6;  
  return (
      <div>
        <StBox>
            <h2>나만의 포켓몬</h2> 
            <CatchBoxContainer>
  {Array.from({ length: maxSlots }).map((_, index) => (
    <CatchBox key={index}>
      {selectedPokemons[index] ? (
        <PokemonCard
          pokemon={selectedPokemons[index]}
          hideCatchButton={true} // 잡기 버튼 숨김
        />
      ) : (
        // 기본 이미지 유지
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" 
          alt="포켓볼"
          style={{ width: "60%", height: "auto" }}
        />
      )}
    </CatchBox>
  ))}
</CatchBoxContainer>

        </StBox>
      </div>
    );
};

const StBox = styled.div`
  background-color: #f6f6f6;
  text-align: center;
  height: 230px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 20px;
  color: red;
`;

const CatchBoxContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: 100px; 
`;

const CatchBox = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100px;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  border-style: dashed;
  border-color: gray;
`;


export default Dashboard;
