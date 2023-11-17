console.log("HELLO WORLD BABY!");

const socket = new WebSocket('wss://zmshowroom.com:6969');

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