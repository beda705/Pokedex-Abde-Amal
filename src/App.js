import logo from "./logo.svg";
import "./App.css";
import PokemonList from "./PokemonList";
import PokemonCArd from "./PokemonCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PokemonList />
      <br />
      <h2>Pokédex</h2>
      <PokemonCArd />
    </div>
  );
}

export default App;
