'use strict';

var $ = require('jquery');

module.exports.WebSocket = function() {
	var WebSocketClient = require('websocket').w3cwebsocket;
	var client = new WebSocketClient('ws://devify-chat.azurewebsites.net/object/12345/viewer');

	client.onopen = function() {
	    console.log('WebSocket Client Connected');
	};

	client.onmessage = function(e) {
	    if (typeof e.data === 'string') {
	    	var o = JSON.parse(e.data);
	        
	        $('#text').html(o.temperature);
	    }
	};	
};