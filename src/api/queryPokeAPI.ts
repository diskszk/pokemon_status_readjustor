import { type Result, ok, err } from "neverthrow";

import { API_ENDPOINT } from "@/constants";
import type { Query_Root } from "@/gql/graphql";

type ReturnType = {
  data: Query_Root;
};

export async function queryPokeAPI(query: string): Promise<Result<Query_Root, Error>> {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (response.ok) {
    const { data } = await response.json() as ReturnType;
    return ok(data);
  }
  else {
    return err(new Error("PokeAPIへのQueryに失敗しました"));
  }
}
