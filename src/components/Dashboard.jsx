import styled from "styled-components";

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

const Dashboard = () => {
    return (
      <div>
        <StBox>
            <h2>나만의 포켓몬</h2> 
            <CatchBoxContainer>
                <CatchBox />
                <CatchBox />
                <CatchBox />
                <CatchBox />
                <CatchBox />
                <CatchBox />
            </CatchBoxContainer>
        </StBox>
      </div>
    );
};

export default Dashboard;
