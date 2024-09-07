import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript"],
    },
  },
};

export default config;
