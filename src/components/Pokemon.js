import React from "react";
import "./Pokemon.css";

const Pokemon = () => {
  const [pokemons, setPokemons] = React.useState("");

  const showPokemons = React.useEffect(async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
      .then((response) => response)
      .then((response) => response.json());

    setPokemons(data.results);
  }, []);
  return (
    <div className="box">
      {pokemons && pokemons.map((pokemon) => <li>Nome: {pokemon.name}</li>)}
    </div>
  );
};

export default Pokemon;
