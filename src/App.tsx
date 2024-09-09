import { useMemo, type FormEvent } from "react";

import { SearchForm } from "@/components";
import { mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../pokemon.json";
import "./App.css";

export function App() {
  const pokemons = useMemo(() => import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <SearchForm
          handleSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);

            const ja = form.get("pokemon-ja");
            const en = form.get("pokemon-en");

            if (!ja) {
              return;
            }
            if (!en) {
              alert("404");
            }

            console.log("data", {
              ja, en,
            });
          }}
          pokemons={pokemons}
        />
      </div>
    </>
  );
}
