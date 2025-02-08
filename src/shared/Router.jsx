import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import Dex from '../pages/dex';

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
        </Routes>
        </BrowserRouter>
    )
}

export default Router;