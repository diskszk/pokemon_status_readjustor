import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";

import { Presentation } from "./presentation";

import type { UserEvent } from "@testing-library/user-event";

const setup = async ({ user, initialTarget }: {
  user: UserEvent;
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

  await user.click(initialTargetElement);

  return { tablist };
};

afterEach(() => cleanup());

describe("tabでフォーカス位置を変更できる", () => {
  test("フォーカスが一番下に当たっている状態でtabをキー入力すると、一番上の要素にフォーカスが当たる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "ゼニガメ" });

    await user.tab();

    const nextTarget = within(tablist).getByText("フシギダネ");

    expect(nextTarget).toBe(document.activeElement);
  });

  test("ファーカスが一番上に当たっている状態で`shift+tab`をキー入力すると、一番下の要素にフォーカスが当たる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "フシギダネ" });

    await user.tab({ shift: true });

    const prevTarget = within(tablist).getByText("ゼニガメ");

    expect(prevTarget).toBe(document.activeElement);
  });
});

describe("上下キーで選択箇所を変更できる", () => {
  test("フォーカスが一番上の要素に当たっている状態で↓キーを入力すると、二番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "フシギダネ" });

    await user.keyboard("{ArrowDown}");

    const nextTarget = within(tablist).getByText("ヒトカゲ");

    expect(nextTarget).toBe(document.activeElement);
  });

  test("フォーカスが一番下の要素に当たっている状態で↓キーを入力すると、一番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "ゼニガメ" });

    await user.keyboard("{ArrowDown}");
    const nextTarget = within(tablist).getByText("フシギダネ");

    expect(nextTarget).toBe(document.activeElement);
  });
  test("フォーカスが一番上の要素に当たっている状態で↑キーを入力すると、一番下の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "フシギダネ" });

    await user.keyboard("{ArrowUp}");
    const prevTarget = within(tablist).getByText("ゼニガメ");

    expect(prevTarget).toBe(document.activeElement);
  });
  test("フォーカスが二番目の要素に当たっている状態で↑キーを入力すると、一番目の要素にフォーカスがあたる", async () => {
    const user = userEvent.setup();
    const { tablist } = await setup({ user, initialTarget: "ヒトカゲ" });

    await user.keyboard("{ArrowUp}");
    const prevTarget = within(tablist).getByText("フシギダネ");

    expect(prevTarget).toBe(document.activeElement);
  });
});
