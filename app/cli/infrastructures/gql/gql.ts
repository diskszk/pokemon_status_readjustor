/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query QueryPokemonBaseStats ($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n": types.QueryPokemonBaseStatsDocument,
    "\n  query QueryPokemonForms ($id: Int!) {\n    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemons {\n        id\n        pokemon_v2_pokemonforms {\n          pokemon_v2_pokemonformnames(where: {language_id: {_eq: 1}}) {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.QueryPokemonFormsDocument,
    "\n  query QueryPokemonId ($inputName: String!) {\n    pokemon_v2_pokemonspeciesname(where: {name: {_eq: $inputName}}) {\n      pokemon_species_id\n    }\n  }\n": types.QueryPokemonIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryPokemonBaseStats ($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryPokemonBaseStats ($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryPokemonForms ($id: Int!) {\n    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemons {\n        id\n        pokemon_v2_pokemonforms {\n          pokemon_v2_pokemonformnames(where: {language_id: {_eq: 1}}) {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryPokemonForms ($id: Int!) {\n    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {\n      pokemon_v2_pokemons {\n        id\n        pokemon_v2_pokemonforms {\n          pokemon_v2_pokemonformnames(where: {language_id: {_eq: 1}}) {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryPokemonId ($inputName: String!) {\n    pokemon_v2_pokemonspeciesname(where: {name: {_eq: $inputName}}) {\n      pokemon_species_id\n    }\n  }\n"): (typeof documents)["\n  query QueryPokemonId ($inputName: String!) {\n    pokemon_v2_pokemonspeciesname(where: {name: {_eq: $inputName}}) {\n      pokemon_species_id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;