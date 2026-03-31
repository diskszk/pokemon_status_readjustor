import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.pokeapi.co/v1beta2",
  documents: ["src/infrastructures/queries/*.query.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/infrastructures/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
