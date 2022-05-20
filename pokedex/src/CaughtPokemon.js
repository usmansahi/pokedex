import { useState } from 'react';

function CaughtPokemon() {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setpokemonNameInput] = useState('');
  const date = new Date().toLocaleDateString();
  const handleInputChange = (event) => {
    setpokemonNameInput(event.target.value);
  };
  const catchPokemon = () => {
    setCaught(caught.concat(`${pokemonNameInput}`));
  };
  return (
    <div>
      <input
        type='text'
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}> let's caught pokemon</button>
      <p>
        Caught {caught.length} pokemon on {date}
      </p>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}
export default CaughtPokemon;
