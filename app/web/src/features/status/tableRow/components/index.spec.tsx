import "@testing-library/jest-dom/vitest";

import { Table, Tbody } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { TestWrapper } from "@/test-utils";
import type { StatusSpecies } from "@/types";

import type { STATUS_SPECIES_JA } from "../../logic/term";

import { TableRow } from ".";

const setup = ({ speciesName = "attack", speciesNameJA = "こうげき" }: Partial<{ speciesName: StatusSpecies; speciesNameJA: typeof STATUS_SPECIES_JA[number] }>) => {
  render(
    <TestWrapper>
      <Table>
        <Tbody>
          <TableRow
            baseStat={100}
            level={50}
            speciesName={speciesName}
            statusType="current"
          />
        </Tbody>
      </Table>
    </TestWrapper>,
  );

  const actualValueInput = screen.getByRole("spinbutton", { name: `currentテーブルの${speciesNameJA}実数値` });
  const effortValueInput = screen.getByRole("spinbutton", { name: `currentテーブルの${speciesNameJA}努力値` });
  const individualValueInput = screen.getByRole("spinbutton", { name: `currentテーブルの${speciesNameJA}個体値` });

  return {
    actualValueInput,
    effortValueInput,
    individualValueInput,
  };
};

describe("実数値を変動させると努力値が変化する", () => {
  test("実数値の入力欄に121と入力すると努力値の値が4増加する", async () => {
    const user = userEvent.setup();
    const { actualValueInput, effortValueInput } = setup({});
    expect(effortValueInput).toHaveValue("0");

    await user.clear(actualValueInput);
    await user.type(actualValueInput, "121");

    expect(effortValueInput).toHaveValue("4");
  });

  test("実数値の上昇スピンボタンを1度クリックすると、努力値が4に変化する", async () => {
    const user = userEvent.setup();
    const { actualValueInput, effortValueInput } = setup({});
    expect(effortValueInput).toHaveValue("0");

    await user.type(actualValueInput, "{arrowup}");

    expect(effortValueInput).toHaveValue("4");
  });
});

describe("努力値を変動させると実数値が変化する", () => {
  test("努力値の入力欄に20と入力すると、実数値が3増加する", async () => {
    const user = userEvent.setup();
    const { actualValueInput, effortValueInput } = setup({});
    expect(actualValueInput).toHaveValue("120");

    await user.type(effortValueInput, "20");

    expect(actualValueInput).toHaveValue("123");
  });

  test("努力値の上昇スピンボタンを1度クリックすると、実数値が1増加する", async () => {
    const user = userEvent.setup();
    const { actualValueInput, effortValueInput } = setup({});
    expect(actualValueInput).toHaveValue("120");

    await user.type(effortValueInput, "{arrowup}");

    expect(actualValueInput).toHaveValue("121");
  });
});

describe("個体値を変動させると実数値が変化する", () => {
  test("レベルが50の場合、個体値を2減少させると実数値が1減少する", async () => {
    const user = userEvent.setup();
    const { actualValueInput, individualValueInput } = setup({});

    expect(actualValueInput).toHaveValue("120");

    await user.type(individualValueInput, "{arrowdown}");
    await user.type(individualValueInput, "{arrowdown}");

    expect(actualValueInput).toHaveValue("119");
  });

  test("レベルが50、こうげきの種族値が100の場合、個体値の入力欄に10と入力すると、実数値が110になる", async () => {
    const user = userEvent.setup();
    const { actualValueInput, individualValueInput } = setup({});
    expect(actualValueInput).toHaveValue("120");

    await user.clear(individualValueInput);
    await user.type(individualValueInput, "10");

    expect(actualValueInput).toHaveValue("110");
  });
});
describe("性格の値を変動させると実数値が変化する", () => {
  test("こうげき種族値が100の場合、性格を上昇補正すると実数値は132になる", async () => {
    const user = userEvent.setup();
    const { actualValueInput } = setup({});
    const natureValueInput = screen.getByRole("spinbutton", { name: "currentテーブルのこうげき性格補正" });
    expect(actualValueInput).toHaveValue("120");

    await user.type(natureValueInput, "{arrowup}");

    expect(actualValueInput).toHaveValue("132");
  });
});

test("HPの行要素には性格の入力欄を表示しない", () => {
  setup({ speciesName: "hp", speciesNameJA: "HP" });
  const natureValueInput = screen.queryByRole("spinbutton", { name: "currentテーブルのHP性格補正" });

  expect(natureValueInput).toBeFalsy();
});
