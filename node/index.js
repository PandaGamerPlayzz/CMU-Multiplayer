const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = [];

wss.on('connection', function connection(ws) {
  clients.push(ws);
  console.log('A new client connected! #clients:', clients.length);
    
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.on('close', function close() {
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1); // Remove the client from the array
    }

    console.log('A client disconnected. #clients:', clients.length);
  });

  ws.send('Hello! Message From Server!!');
});