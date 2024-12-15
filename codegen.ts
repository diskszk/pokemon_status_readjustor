import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "src/features/infrastructures/gql/": {
      preset: "client",
      plugins: [],
    },
    "cli/infrastructures/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
