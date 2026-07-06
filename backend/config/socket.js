const { WebSocketServer } = require("ws");
const clients = new Map();
function initializeSocket() {
    // Initialize the server using the 'new' keyword
    const wss = new WebSocketServer({ port: process.env.WEBSOCKET_PORT || 8080 });

    // Handle connection events
    wss.on("connection", (ws) => {
        console.log("A new client connected!");
        // Handle incoming messages from clients
        ws.on("message", (message) => {
            console.log(`Received message: ${message}`);

            // Example: Echo the message back to the client
            ws.send(`Server received: ${message}`);
        });

        // Handle client disconnection
        ws.on("close", () => {
            console.log("Client disconnected");
        });
    });

    console.log(`WebSocket server is running on port ${process.env.WEBSOCKET_PORT || 8080}`);
}
module.exports = initializeSocket;