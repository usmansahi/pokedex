const Logo = (props) => {
 
    return (
      <div>
       
        <img  onClick ={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="logo"></img>
     
    
      </div>
    )
  }


export default Logo;