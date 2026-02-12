import { useState, useEffect } from "react";
import PokemonDetail from "./PokemonDetail";
import PokemonFav from "./PokemonFav";
import "./PokemonList.css";

const PokemonList = () => {
  const [compteurFavoris, setCompteurFavoris] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  const handleFavoriteChange = (isFavorite) => {
    if (isFavorite === true) {
      setCompteurFavoris(compteurFavoris + 1);
    } else {
      setCompteurFavoris(compteurFavoris - 1);
    }
  };

  return (
    <div className="pokemon-container">
      <div className="compteur">
        <h2>⭐ Favoris : {compteurFavoris}</h2>
      </div>

      <div className="pokemon">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>

            <PokemonDetail detail="Taille: 0.6 m, Poids: 8.5 kg" />
            <PokemonFav fav={handleFavoriteChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
