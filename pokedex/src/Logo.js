const Logo = () => {
  const logWhenClicked = () => {
    console.log("hy there!");
  };
    return (
      <div>
       
        <img  onClick ={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="logo"></img>
     
    
      </div>
    )
  }


export default Logo;