import "@testing-library/jest-dom/vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Differences } from "@/features/differences/components";
import { Status } from "@/features/status/components/Status";
import { garchomp } from "@/mockData/pokemons";
import { TestWrapper } from "@/test-utils";

describe("努力値の変化に伴って与えるアイテムの個数が変化する", () => {
  const testRenderer = () => render(
    <TestWrapper>
      <Status
        baseStats={garchomp.baseStats}
        label="現在のステータス"
        statusType="current"
      />
      <Status
        baseStats={garchomp.baseStats}
        label="調整後のステータス"
        statusType="adjusted"
      />
      <Differences />
    </TestWrapper>,
  );

  test("現在のステータスの攻撃の努力値を20、調整後のステータスのこうげきの努力値を60とした場合、タウリン4個を表示する", async () => {
    const user = userEvent.setup();
    testRenderer();

    const currentNumberInput = await screen.findByRole("spinbutton", { name: "currentテーブルのこうげき努力値" });
    await user.type(currentNumberInput, "20");

    const adjustedNumberInput = await screen.findByRole("spinbutton", { name: "adjustedテーブルのこうげき努力値" });
    await user.type(adjustedNumberInput, "60");

    expect(screen.getByText("タウリン / 4")).toBeInTheDocument();
  });

  test("調整後のステータスのぼうぎょの努力値の上矢印を1回クリックした場合、ていこうのハネ4個を表示する", async () => {
    const user = userEvent.setup();
    testRenderer();

    const adjustedNumberInput = await screen.findByRole("spinbutton", { name: "adjustedテーブルのぼうぎょ努力値" });
    await user.type(adjustedNumberInput, "{arrowup}");

    expect(screen.getByText("ていこうのハネ / 4")).toBeInTheDocument();
  });

  test("現在のステータスのとくこうの努力値をMAXにした場合、ロメのみ26個を表示する", async () => {
    const user = userEvent.setup();
    testRenderer();

    const maximumButton = await screen.findByRole("button", { name: "currentテーブルのとくこう努力値を最大" });

    await user.click(maximumButton);

    expect(screen.getByText("ロメのみ / 26")).toBeInTheDocument();
  });

  test("現在のステータスのとくぼうの実数値を2上昇した場合、せいしんのハネ8個とウブのみ2個を表示する", async () => {
    const user = userEvent.setup();
    testRenderer();

    const currentNumberInput = await screen.findByRole("spinbutton", { name: "currentテーブルのとくぼう実数値" });
    await user.type(currentNumberInput, "{arrowup}");
    await user.type(currentNumberInput, "{arrowup}");

    expect(screen.getByText("せいしんのハネ / 8")).toBeInTheDocument();
    expect(screen.getByText("ウブのみ / 2")).toBeInTheDocument();
  });

  test("現在・調整後ともにステータスのすばやさ努力値を252にした場合、すばやさに関するアイテムは表示しない", async () => {
    const user = userEvent.setup();
    testRenderer();

    const currentNumberInput = await screen.findByRole("spinbutton", { name: "currentテーブルのすばやさ努力値" });
    await user.type(currentNumberInput, "252");

    const adjustedNumberInput = await screen.findByRole("spinbutton", { name: "adjustedテーブルのすばやさ努力値" });
    await user.type(adjustedNumberInput, "252");

    expect(screen.queryByText("インドメタシン")).not.toBeInTheDocument();
    expect(screen.queryByText("しゅんぱつのハネ")).not.toBeInTheDocument();
    expect(screen.queryByText("マトマのみ")).not.toBeInTheDocument();
  });
});
