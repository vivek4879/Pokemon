import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonDisplay from './Components/pokemonvisualizer';


const pokemonData = [
  {name: 'Bulasaur', type: 'Grass', level: 2},
  {name: 'Charmandar', type: 'Fire', level: 3},
  {name: 'Squirtel', type: 'Water', level: 4},
];
function App() {
  return (
    <div className="App">
      <PokemonDisplay
      InfoOfPokemons={pokemonData}
       />
    </div>
  );
}

export default App;
