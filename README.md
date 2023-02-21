# @carlosv2/adapter-node-ws

[Adapter](https://kit.svelte.dev/docs/adapters) for SvelteKit apps that generates a standalone Node server with support for WebSockets.

This package uses the [ws](https://github.com/websockets/ws) library to provide the websockets functionality.

## Disclaimer

This project has taken a fair amount of shorcuts due to SvelteKit not being ready yet and the author having the need to deliver
code. Nevertheless, it should provide a convenient package to build WebSockets on top.

I can't guarantee it will suite the needs of everybody (actually, I can most likely guarantee the oposite) but I'm happy to, given
a PR, review and comment on potential improvemnts (there is lot of room for improvement!).

## Docs

This adapter comes with support for both DEV and PROD.

Each environment can be configured individually.

### Development

Unfortunately, I couldn't find another way of doing this than changing the original HMR port from Vite. This, however, should
not affect the functionality but it does introduce a minimal configuration. In your `vite.config.ts`, you need to add:

```ts
const config: UserConfig = {
  server: {
    hmr: { port: <any other than your server port> }
  }
};
```

In addition to this change, you also need to add the plugin to inject the WebSocket into the same file:

```ts
import WebSockets from "@carlosv2/adapter-node-ws/plugin";

const config: UserConfig = {
  plugins: [WebSockets()],
};
```

### Production

Simply replace your adapter in `svelte.config.js` with this one:

```ts
import adapter from "@carlosv2/adapter-node-ws/adapter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // adapter options go here
    }),
  },
};
```

Since this adapter is based on `@sveltejs/adapter-node`, any configuration for that adapter is still valid and applicable
to this one.

## How to use

Have you configured the required environments? Good, then the only thing left is to build WebSockety code. For this,
quite simply export a function named `handleWs` to your `hooks.server.ts` file:

```ts
import type { WebSocketServer } from "ws";

export const handleWs = (wss: WebSocketServer) => {
  wss.on("connection", (ws) => {
    ws.send("Hello World!");
  });
};
```

## License

[MIT](LICENSE)
