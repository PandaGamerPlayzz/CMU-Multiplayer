console.log("HELLO WORLD BABY!");

const PORT = 6969;
const MODE = 'testing';
const DOMAIN = MODE === 'testing' ? 'localhost' : 'zmshowroom.com'

const socket = new WebSocket(`${DOMAIN === 'localhost' ? 'ws' : 'wss'}://${DOMAIN}:${PORT}`);

socket.onopen = function(event) {
    console.log('Connected to the WebSocket server');
    socket.send('Hello, Server!');
};

socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
};

socket.onerror = function(event) {
    console.error('WebSocket error:', event);
};

var $module = {
  
};