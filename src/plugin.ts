// import { WebSocketServer } from "ws";

/**
 * @returns {import('vite').PluginOption}
 */
export default function () {
  // console.log("yipee kay yay");
  // let root;

  return {
    name: "websockets-for-dev",
    // configResolved(config) {
    // console.log(config);
    // root = config;
    // },
    // out
    async configureServer(server) {
      console.log(
        import("/home/carlos/Development/EasyOrdering/app/src/hooks.server")
      );
      // const hooks = await import(`${root}/src/hooks.server.js`);
      console.log("hooks!");
      // console.log(server);

      // const wss = new WebSocketServer({ server: server.httpServer });
      // console.log("websockets-for-dev");
      // handleWs(wss);
    },
  };
}
