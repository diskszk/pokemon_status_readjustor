import { act, cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";

import { Presentation } from "./presentation";

const setup = async ({ initialTarget }: {
  initialTarget: string;
}): Promise<{ tablist: HTMLElement }> => {
  render(
    <Presentation
      suggestedPokemonList={["フシギダネ", "ヒトカゲ", "ゼニガメ"]}
      updateFormValue={() => void 0}
    />,
  );

  const tablist = screen.getByRole("tablist", { name: "suggested-pokemon-list" });

  const initialTargetElement = within(tablist).getByText(initialTarget);
  act(() => initialTargetElement.focus());

  return { tablist };
};

afterEach(() => cleanup());

describe("tabでフォーカス位置を変更できる", () => {
  test("フォーカスが一番下に当たっている状態でtabをキー入力すると、一番上の要素にフォーカスが当たる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "ゼニガメ" });

    await user.tab();

    const nextTarget = within(tablist).getByText("フシギダネ");

    expect(nextTarget).toBe(document.activeElement);
  });

  test("ファーカスが一番上に当たっている状態で`shift+tab`をキー入力すると、一番下の要素にフォーカスが当たる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "フシギダネ" });

    await user.tab({ shift: true });

    const prevTarget = within(tablist).getByText("ゼニガメ");

    expect(prevTarget).toBe(document.activeElement);
  });
});

describe("上下キーで選択箇所を変更できる", () => {
  test("フォーカスが一番上の要素に当たっている状態で↓キーを入力すると、二番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "フシギダネ" });

    await user.keyboard("{ArrowDown}");

    const nextTarget = within(tablist).getByText("ヒトカゲ");

    expect(nextTarget).toBe(document.activeElement);
  });

  test("フォーカスが一番下の要素に当たっている状態で↓キーを入力すると、一番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "ゼニガメ" });

    await user.keyboard("{ArrowDown}");
    const nextTarget = within(tablist).getByText("フシギダネ");

    expect(nextTarget).toBe(document.activeElement);
  });
  test("フォーカスが一番上の要素に当たっている状態で↑キーを入力すると、一番下の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "フシギダネ" });

    await user.keyboard("{ArrowUp}");
    const prevTarget = within(tablist).getByText("ゼニガメ");

    expect(prevTarget).toBe(document.activeElement);
  });
  test("フォーカスが二番目の要素に当たっている状態で↑キーを入力すると、一番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ initialTarget: "ヒトカゲ" });

    await user.keyboard("{ArrowUp}");
    const prevTarget = within(tablist).getByText("フシギダネ");

    expect(prevTarget).toBe(document.activeElement);
  });
});

test("候補一覧に表示されている`フシギダネ`をクリックすると、候補一覧コンポーネントは非表示になる", async () => {
  const user = userEvent.setup();
  await setup({ initialTarget: "フシギダネ" });

  await user.click(screen.getByRole("button", { name: "フシギダネ" }));

  expect(screen.queryByRole("tablist", { name: "suggested-pokemon-list" })).toBeFalsy();
});

test("リストの外側をクリックすると、候補一覧は非表示になる", async () => {
  const user = userEvent.setup();

  render(
    <div data-testid="outer">
      <Presentation
        suggestedPokemonList={["フシギダネ", "ヒトカゲ", "ゼニガメ"]}
        updateFormValue={() => void 0}
      />
    </div>,
  );

  await user.click(screen.getByTestId("outer"));

  expect(screen.queryByRole("tablist", { name: "suggested-pokemon-list" })).toBeFalsy();
});
