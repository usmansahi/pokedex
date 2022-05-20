const BestPokemon = (props) => {
  const abilities = ['anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <ul>
        {abilities.map((ability, i) => (
          <li key={i}>{ability}</li>
        ))}
      </ul>
      <p>My favorite Pokémon is{props.pokemonName}</p>
    </div>
  );
};
export default BestPokemon;
