export const QueryAllPokemonName = `
  query QueryAllPokemonName {
    pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      name
      pokemon_v2_pokemonspeciesnames(where: {pokemon_v2_language: {name: {_in: "ja"}}}) {
        name
      }
    }
  }
`;
