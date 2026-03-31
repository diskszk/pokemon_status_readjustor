import { gql } from "urql";

export const QueryPokemonId = gql`
  query QueryPokemonId ($inputName: String!) {
    pokemonspeciesname(where: {name: {_eq: $inputName}}) {
      pokemon_species_id
    }
  }
`;
