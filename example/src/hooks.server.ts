import type { WebSocket, WebSocketServer } from "ws";

const connections = new Set<WebSocket>();


if ( import.meta.hot ) {
	// import.meta.hot.dispose( () => {
	// 	console.clear();
	// } );

    console.log("clearing", connections);
    

    connections.forEach((ws) => {
        ws.close();
    })



    connections.clear();
}

// todo this needs to 
export const handleWs = (wss: WebSocketServer) => {
  wss.on("connection", (ws) => {
    wss.removeAllListeners()

    connections.add(ws)
    // this is sent multiple times when we are hot reloaded
    ws.send("[init]: Hello from server!");
    console.log("sending ws");
    console.log("connection count", connections.size)
    
    

    ws.on("message", (data) => {
        ws.send(`[pong]: ${data}`)
    })
  });
};