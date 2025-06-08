import { expect, test } from "vitest";

import { getItemAmount } from ".";

test("差分量が40の場合、使うアイテムはドリンク4個になる", () => {
  expect(getItemAmount(40)).toEqual({ largeIncrease: 4, smallIncrease: 0,
    decrease: 0 });
});
test("差分が8の場合、使うアイテムはハネ8個になる", () => {
  expect(getItemAmount(8)).toEqual({ largeIncrease: 0, smallIncrease: 8, decrease: 0 });
});
test("差分量が122の場合、使うアイテムはドリンク12個とハネ2個になる", () => {
  expect(getItemAmount(122)).toEqual({ largeIncrease: 12, smallIncrease: 2, decrease: 0 });
});
test("差分量が-200の場合、使うアイテムはきのみ20個になる", () => {
  expect(getItemAmount(-200)).toEqual({ largeIncrease: 0, smallIncrease: 0, decrease: 20 });
});
test("差分量が-26の場合、使うアイテムはきのみ3個とハネ4個になる", () => {
  expect(getItemAmount(-26)).toEqual({ largeIncrease: 0, smallIncrease: 4, decrease: 3 });
});
test("差分量が-252の場合、使うアイテムはきのみ26個になる", () => {
  expect(getItemAmount(-252)).toEqual({ largeIncrease: 0, smallIncrease: 0, decrease: 26 });
});
test("差分量が-251の場合、使うアイテムはきのみ26個とハネ9個になる", () => {
  expect(getItemAmount(-251)).toEqual({ largeIncrease: 0, smallIncrease: 9, decrease: 26 });
});
test("差分量が-244の場合、使うアイテムはきのみ25個とハネ6個になる", () => {
  expect(getItemAmount(-244)).toEqual({ largeIncrease: 0, smallIncrease: 6, decrease: 25 });
});
test("差分量が0の場合、使うアイテムは全て0個になる", () => {
  expect(getItemAmount(0)).toEqual({
    largeIncrease: 0, smallIncrease: 0, decrease: 0,
  });
});
