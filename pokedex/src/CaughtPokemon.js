import { useState } from 'react';

function CaughtPokemon() {
  const [caught, setCaught] = useState([]);
  const date = new Date().toLocaleDateString();
  function catchPokemon() {
    setCaught(caught.concat('pikachu'));
  }
  return (
    <div>
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
