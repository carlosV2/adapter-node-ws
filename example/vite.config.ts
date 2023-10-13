import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import WebSockets from "@carlosv2/adapter-node-ws/plugin";

export default defineConfig({
	plugins: [sveltekit(), WebSockets()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		hmr: { port: 9999 }
	}
});
