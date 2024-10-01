import { type Result, ok, err } from "neverthrow";

const apiEndpoint = "https://beta.pokeapi.co/graphql/v1beta";

export async function queryPokeAPI<T>(query: string): Promise<Result<T, Error>> {
  const response = await fetch(apiEndpoint!, {
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
