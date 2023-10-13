import { expect, test } from '@playwright/test';

test('main test', async ({ page }) => {
	await page.goto('/ws');

	await expect(page.getByText("Demo page")).toBeVisible();

	const status = page.getByTestId("connected");
	const messages = page.getByTestId("messages");
	const sendInput = page.getByTestId("send");

	await expect(status).toHaveText("true");
	await expect(messages).toContainText(`[init]: Hello from server`);

	await sendInput.fill("message 1");
	await sendInput.press("Enter")

	await expect(messages).toContainText(`[pong]: message 1`)

});
