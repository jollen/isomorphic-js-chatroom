var WebSocketClient = require('websocket').w3cwebsocket;
var client = new WebSocketClient('ws://devify-temperature.azurewebsites.net/object/12345/viewer');

client.onopen = function() {
    console.log('WebSocket Client Connected');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};