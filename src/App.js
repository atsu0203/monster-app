import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";
import { useEffect } from "react";

function App() {
  const [loading, setloading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
    setloading(false);
  }, []);
  {
    loading ? (
      <h1>ロード中</h1>
    ) : (
      <>
        |<h1>ポケモンデータ取得済み</h1>
      </>
    );
  }

  return <div className="App"></div>;
}

export default App;
