import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import { TestWrapper } from "@/test-utils";

import { Status } from ".";

const setup = () => {
  render(
    <TestWrapper>
      <Status
        label="現在のステータス"
        statusType="current"
      />
    </TestWrapper>,
  );
};

test("努力値の合計が510を超えた場合、赤色で表示する", async () => {
  const user = userEvent.setup();
  setup();

  await user.type(screen.getByRole("spinbutton", { name: "currentテーブルのこうげき努力値" }), "252");
  await user.type(screen.getByRole("spinbutton", { name: "currentテーブルのぼうぎょ努力値" }), "252");
  await user.type(screen.getByRole("spinbutton", { name: "currentテーブルのとくこう努力値" }), "12");

  const result = screen.getByText("total:516/510");
  expect(result).toHaveStyle({ color: "red" });
});

test.skip("こうげき種族値が100の場合、レベルを100にすると実数値は236になる", async () => {
  const user = userEvent.setup();
  setup();

  const levelInput = screen.getByRole("spinbutton", { name: "レベル" });
  await user.clear(levelInput);
  await user.type(levelInput, "100");

  expect(screen.getByRole("spinbutton", { name: "currentテーブルのこうげき実数値" })).toHaveValue("236");
});
