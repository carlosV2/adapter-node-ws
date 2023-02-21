import { handler } from "HANDLER";
import { env } from "ENV";
import polka from "polka";
import http from "http";
import { initWs } from "WEBSOCKET";

export const path = env("SOCKET_PATH", false);
export const host = env("HOST", "0.0.0.0");
export const port = env("PORT", !path && "3000");

const httpServer = http.createServer();
const server = polka({ server: httpServer }).use(handler);

await initWs(httpServer);
server.listen({ path, host, port }, () => {
  console.log(`Listening on ${path ? path : host + ":" + port}`);
});

export { server };
