import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, waitForElementToBeRemoved, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test } from "vitest";

import { TestWrapper } from "@/test-utils";

import { SearchForm } from "./components";

import type { UserEvent } from "@testing-library/user-event";

const setup = () => {
  render(
    <TestWrapper>
      <SearchForm />
    </TestWrapper>,
  );

  const searchForm = screen.getByLabelText("pokemon-search");

  return { searchForm };
};

const action = async ({
  user, searchForm, inputValue,
}: {
  user: UserEvent;
  searchForm: HTMLElement;
  inputValue: string;
}) => {
  await user.type(searchForm, inputValue);

  expect(await screen.findByText("Loading...")).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText("Loading..."));
};

afterEach(() => cleanup());

test("searchフォームに`ふしぎだね`と入力すると、候補一覧に`フシギダネ`を表示する", async () => {
  const user = userEvent.setup();
  const { searchForm } = setup();

  await action({ user, searchForm, inputValue: "ふしぎだね" });

  const list = await screen.findByRole("tablist", { name: "suggested-pokemon-list" });
  expect(within(list).getByText("フシギダネ")).toBeInTheDocument();
});

test("searchフォームに`やど`と入力すると、候補一覧に`ヤドン`,`ヤドラン`,`ヤドキング`を表示する", async () => {
  const user = userEvent.setup();
  const { searchForm } = setup();

  await action({ user, searchForm, inputValue: "やど" });

  const list = await screen.findByRole("tablist", { name: "suggested-pokemon-list" });
  const listItem = within(list).getAllByRole("tab");
  const listTexts = listItem.map((item) => item.textContent);

  expect(listTexts).toEqual(expect.arrayContaining(["ヤドン", "ヤドラン", "ヤドキング"]));
});

test("searchフォームに`どん`と入力すると、候補一覧に`リザードン`,`ヤドン`を表示する", async () => {
  const user = userEvent.setup();
  const { searchForm } = setup();

  await action({ user, searchForm, inputValue: "どん" });

  const list = await screen.findByRole("tablist", { name: "suggested-pokemon-list" });
  const listItem = within(list).getAllByRole("tab");
  const listText = listItem.map((item) => item.textContent);

  expect(listText).toEqual(expect.arrayContaining(["リザードン", "ヤドン"]));
});

test("候補一覧に表示されている`フシギダネ`をクリックすと、searchフォームに反映する", async () => {
  const user = userEvent.setup();
  const { searchForm } = setup();

  await action({ user, searchForm, inputValue: "ふしぎ" });

  const item = await screen.findByRole("button", { name: "フシギダネ" });
  await user.click(item);

  expect(searchForm).toHaveValue("フシギダネ");
});
