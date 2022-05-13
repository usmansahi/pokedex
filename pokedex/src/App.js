import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';

const App = () => {
  const logWhenClicked = () => {
    console.log('hy there!');
  };
  return (
    <div>
      <header>
        <h1>Welcome to the Pokedex</h1>
      </header>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};

export default App;
