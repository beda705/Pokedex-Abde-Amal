import { useState } from "react";

function PokemonCard({ name, type, fav }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);

    if (fav) {
      fav(newFavoriteState);
    }
  }

  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Pas Favoris" : "⭐ Favoris"}
      </button>
    </div>
  );
}

export default PokemonCard;
