// import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <PokemonLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" alt="포켓몬 로고" />
            <InBtn onClick={() => {
                navigate("/dex")
            }}>
            포켓몬 도감으로 이동
            </InBtn>
        </Container>
    )
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.pinimg.com/736x/77/d5/89/77d5892879682be6d71f83ff5eda71b4.jpg");
  background-size: cover;
  background-position: center;
  padding: 3rem;

`;

const PokemonLogo = styled.img`
    display: flex;
    overflow: clip;
    flex-direction: column;
    margin: 9rem auto;
`;

const InBtn = styled.button`
width: 20rem;
height: 4rem;
text-align: center;
font-size: 1.5rem;
font-weight: 700;
background-color: rgb(240, 255, 255, 0.8);
display: flex;
flex-direction: column;
margin: 5rem auto;
padding: 10px;
border-radius: 1rem;

cursor: pointer;
`;

export default Home;