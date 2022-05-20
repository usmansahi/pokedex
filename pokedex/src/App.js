import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

const App = () => {
  const logWhenClicked = () => {
    console.log('hy there!');
  };
  return (
    <div>
      <header className='header'>
        <h1>Welcome to the Pokedex</h1>
      </header>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon pokemonName=' charmander' />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
