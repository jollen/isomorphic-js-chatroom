var ws = require('./websocket');
var $ = require('jquery');

$.fn.WebSocket = ws.WebSocket;

// Main application
$('#text').WebSocket();