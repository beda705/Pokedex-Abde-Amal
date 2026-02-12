import { useState } from "react";

export default function PokemonDetail({ detail }) {
  const [msg, setmsg] = useState(true);

  function afficher() {
    setmsg(!msg);
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
