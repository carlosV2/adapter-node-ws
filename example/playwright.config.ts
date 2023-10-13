import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
const isDevServer = process.env.TEST_SERVER || 'dev';

//

const command = isDevServer == 'dev' ? 'npm run dev' : 'npm run build && npm run preview:node';

const config: PlaywrightTestConfig = {
	webServer: {
		command,
		port: 4000,
		stdout: 'pipe',
		stderr: 'pipe'
	},
	use: {
		baseURL: 'http://localhost:4000',
		trace: 'on-first-retry',
		screenshot: 'only-on-failure'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	]
};

export default config;
