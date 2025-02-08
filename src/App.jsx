import { useState } from 'react';
import Router from './shared/Router'


const App = () => {

  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬 추가 함수 (자식 컴포넌트에서 사용하도록 props로 내려줌)
  const addPokemon = (pokemon) => {
    setSelectedPokemons ([...selectedPokemons, pokemon]);
  }

  return (
    <div>
      <Router 
      addPokemon={addPokemon} 
      selectedPokemons={selectedPokemons}
      setSelectedPokemons={setSelectedPokemons} />
    </div>
  )
}

export default App;