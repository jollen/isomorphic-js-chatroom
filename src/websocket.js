'use strict';

var $ = require('jquery');
var WebSocketClient = require('websocket').w3cwebsocket;

module.exports.WebSocket = function() {
	var self = this;
	var client = new WebSocketClient('ws://wot.city/object/12345/viewer');

	client.onopen = function() {
	    console.log('WebSocket Client Connected');
	};

	client.onmessage = function(e) {
	    if (typeof e.data === 'string') {
	    	var o = JSON.parse(e.data);

	        if ( 0 + o.temperature >= 50 ) {
	        	self.removeClass('text-gray');
	        	self.addClass('text-red');
	        } else {
	        	self.removeClass('text-red');
	        	self.addClass('text-gray');
	        }

	        self.html(o.temperature);
	    }
	};
};