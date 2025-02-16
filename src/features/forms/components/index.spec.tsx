import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { pokemonSpeciesIdAtom } from "@/atoms";
import { TestWrapper } from "@/test-utils";

import { Container as Forms } from "./container";
test("ミュウ(151)を表示するとき、異なるすがたはないのでリストボックスを表示しない", async () => {
  render(
    <TestWrapper atomValues={[[pokemonSpeciesIdAtom, 151]]}>
      <Forms />
    </TestWrapper>,
  );

  const select = screen.queryByRole("combobox", { name: "異なるすがた" });

  expect(select).not.toBeInTheDocument();
});

test("テラパゴス(1024)を表示するとき、2つの異なるすがたを持つのでリストボックスに合計4つのoptionを表示する", async () => {
  render(
    <TestWrapper atomValues={[[pokemonSpeciesIdAtom, 1024]]}>
      <Forms />
    </TestWrapper>,
  );

  const select = await screen.findByRole("combobox", { name: "異なるすがた" });

  expect(select).toBeInTheDocument();

  const options = screen.getAllByRole("option");
  expect(options).toHaveLength(4);
});
