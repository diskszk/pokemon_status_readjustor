import { type Result, ok, err } from "neverthrow";

import { API_ENDPOINT } from "@/constants";

export async function queryPokeAPI<T>(query: string): Promise<Result<T, Error>> {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (response.ok) {
    const data = await response.json() as T;

    return ok(data);
  }
  else {
    return err(new Error("PokeAPIへのQueryに失敗しました"));
  }
}
