import { readFileSync } from "fs";
import { WebSocketServer } from "ws";

const sym = "websocket.server";

/**
 * @returns {import('vite').PluginOption}
 */
export default function () {
  let command;
  let root;

  return {
    name: "websockets-for-dev",
    configResolved(config) {
      command = config.command;
      root = config.root;
    },
    configureServer({ httpServer }) {
      globalThis[Symbol.for(sym)] = new WebSocketServer({ server: httpServer });
    },
    configurePreviewServer({ httpServer }) {
      globalThis[Symbol.for(sym)] = new WebSocketServer({ server: httpServer });
    },
    load(file) {
      if (command !== "build" && file === `${root}/src/hooks.server.ts`) {
        const lines = readFileSync(file, "utf-8").split("\n");
        lines.push(`handleWs(globalThis[Symbol.for('${sym}')]);`);

        return { code: lines.join("\n") };
      }
    },
  };
}
