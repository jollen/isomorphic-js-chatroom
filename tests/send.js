var WebSocketClient = require('websocket').w3cwebsocket;
var client = new WebSocketClient('ws://wot.city/object/12345/send');

var message = {
	message: process.argv[3],
	username: process.argv[2],
	timestamp: new Date()
};

client.onopen = function() {
    client.send(JSON.stringify(message));

    process.exit(0);
};