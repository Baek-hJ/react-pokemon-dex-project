import styled from "styled-components"
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Layout = () => {
    return (
        <DexLayout>
            <Dashboard />
            <PokemonList />
        </DexLayout>
    )
}

const DexLayout = styled.div`
    background-color: #ffdfad;
    min-height: 100vh;
    padding: 2rem;

`;

export default Layout;