import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  ignoreNoDocuments: true,
  generates: {
    "infrastructures/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
