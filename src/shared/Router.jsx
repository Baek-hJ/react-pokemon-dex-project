import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import PokemonDetail from '../components/PokemonDetail';
import Dex from '../pages/Dex';

const Router = ({addPokemon, selectedPokemons, setSelectedPokemons}) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Dex' 
            element={<Dex 
            addPokemon={addPokemon} 
            selectedPokemons={selectedPokemons}
            setSelectedPokemons={setSelectedPokemons}/>} />
            <Route
            path="/pokemon-detail"
            element={<PokemonDetail />}
            />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;