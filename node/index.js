const https = require('https');
const WebSocket = require('ws');
const fs = require('fs');

const PORT = 6969;
const MODE = 'testing';

var server
var wss_input

if(MODE === 'testing') {
  wss_input = { port: PORT };
} else {
  server = https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/zmshowroom.com/cert.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/zmshowroom.com/privkey.pem')
  });

  server.listen(PORT);
  wss_input = server;
}

console.log(`PORT: ${PORT}`);
console.log(`MODE: ${MODE}`);

const wss = new WebSocket.Server(wss_input);

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
      clients.splice(index, 1);
    }

    console.log('A client disconnected. #clients:', clients.length);
  });

  ws.send('Hello! Message From Server!!');
});