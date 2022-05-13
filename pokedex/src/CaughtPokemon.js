import { useState } from 'react';

function CaughtPokemon() {
  const [caught, setCaught] = useState(0);
  const date = new Date().toLocaleDateString();
  function catchPokemon() {
    setCaught(caught + 1);
  }

  return (
    <div>
      <p>
        Caught {caught} pokemon on {date}
      </p>
      <button onClick={catchPokemon}> let's caught pokemon</button>
    </div>
  );
}
export default CaughtPokemon;
