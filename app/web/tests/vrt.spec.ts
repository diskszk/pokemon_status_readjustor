import { test, expect } from "@playwright/test";

test("Visual Regression Testing", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.setViewportSize({
    width: 1470,
    height: 956,
  });

  await expect(page).toHaveScreenshot({ fullPage: true });
});
