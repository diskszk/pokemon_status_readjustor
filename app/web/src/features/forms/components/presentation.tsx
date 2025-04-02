import type { PokemonForm } from "@/types";

import type { ChangeEventHandler } from "react";

type Props = {
  pokemonForms: PokemonForm[];
  handleChangePokemonForm: ChangeEventHandler<HTMLSelectElement>;
  speciesId: number;
};

export function Presentation({ pokemonForms, handleChangePokemonForm, speciesId }: Props) {
  return (
    <select
      aria-label="異なるすがた"
      onChange={handleChangePokemonForm}
    >
      <option value={speciesId}>通常のすがた</option>
      {pokemonForms.map((form) => (
        <option
          key={form.id}
          value={form.id}
        >
          {form.name}
        </option>
      ))}
    </select>
  );
}
