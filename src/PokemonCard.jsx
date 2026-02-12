import { useState, useEffect } from "react";

export default function TrafficLight() {
  const [pokemons, setPokemons] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  const suivant = () => setIndex((prev) => (prev + 1) % 20);
  const precedent = () => setIndex((prev) => (prev - 1) % 20);

  const pokemon = pokemons[index];

  if (pokemons.length === 0) return <p>Loading Pokédex...</p>;

  return (
    <div>
      <h3>{index + 1} / 20</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        alt={pokemon.name}
      />
      <h4>{pokemon.name}</h4>
      <div>
        <button onClick={precedent}>◄</button>
        <button onClick={suivant}>►</button>
      </div>
    </div>
  );
}
