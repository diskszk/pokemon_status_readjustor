import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import { pokemonSpeciesIdAtom } from "@/atoms";
import { TestWrapper } from "@/test-utils";

import { Container as Forms } from "./container";
test("デフォルトではガブリアスの画像を表示する", async () => {
  render(
    <TestWrapper atomValues={[[pokemonSpeciesIdAtom, 151]]}>
      <Forms />
    </TestWrapper>,
  );

  expect(await screen.findByAltText("garchompの画像")).toBeTruthy();
});

test("idが3に変更されたとき、それぞれのリージョンフォームのフシギバナの画像を表示する", async () => {
  render(
    <TestWrapper atomValues={[[pokemonSpeciesIdAtom, 3]]}>
      <Forms />
    </TestWrapper>,
  );

  expect(await screen.findByAltText("venusaurの画像")).toBeTruthy();
  expect(await screen.findAllByRole("img")).toHaveLength(3);
});

test("複数の画像を表示しているとき、クリックした画像を1番目に表示する", async () => {
  const user = userEvent.setup();

  render(
    <TestWrapper atomValues={[[pokemonSpeciesIdAtom, 3]]}>
      <Forms />
    </TestWrapper>,
  );

  await screen.findByAltText("venusaurの画像");

  await user.click(screen.getByAltText("venusaur-megaの画像"));

  const imgElements = await screen.findAllByRole("img");

  expect(imgElements.map((el) => el.getAttribute("alt"))).toMatchObject(["venusaur-megaの画像", "venusaurの画像", "venusaur-gmaxの画像"]);
});
