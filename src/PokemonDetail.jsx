import { useState } from "react";

export default function PokemonDetail({ detail }) {
  const [msg, setDet] = useState(true);

  function afficher() {
    setDet(!msg);
  }

  return (
    <div>
      <p>{msg ? "..." : detail}</p>
      <button onClick={afficher}>
        {msg ? "Afficher les details" : "Cacher les details"}
      </button>
    </div>
  );
}