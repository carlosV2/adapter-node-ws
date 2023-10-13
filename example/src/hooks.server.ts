import type { WebSocket, WebSocketServer } from 'ws';

const connections = new Set<WebSocket>();

// if ( import.meta.hot ) {
// 	// import.meta.hot.dispose( () => {
// 	// 	console.clear();
// 	// } );

//     console.log("clearing", connections);

//     connections.forEach((ws) => {
//         ws.close();
//     })

//     connections.clear();
// }

// todo this needs to
export const handleWs = (wss: WebSocketServer) => {
	wss.on('connection', (ws) => {
		// connections.add(ws)
		// this is sent multiple times when we are hot reloaded
		ws.send('[init]: Hello from server!');
		console.log('sending init message', "connection count", connections.size);

		ws.on('message', (data) => {
			ws.send(`[pong]: ${data}`);
		});
		ws.on('close', () => {
			console.log('client disconnected');

			connections.delete(ws);
		});
	});
};
