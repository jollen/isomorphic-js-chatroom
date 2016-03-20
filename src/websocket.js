'use strict';

var $ = require('jquery');

module.exports.WebSocket = function() {
	var WebSocketClient = require('websocket').w3cwebsocket;
	var client = new WebSocketClient('ws://wot.city/object/12345/viewer');

	client.onopen = function() {
	    console.log('WebSocket Client Connected');
	};

	client.onmessage = function(e) {
	    if (typeof e.data === 'string') {
	    	var o = JSON.parse(e.data);
	        
	        if ( 0 + o.temperature >= 50 ) {
	        	$('#text').removeClass('text-gray');
	        	$('#text').addClass('text-red');
	        } else {
	        	$('#text').removeClass('text-red');
	        	$('#text').addClass('text-gray');
	        }

	        $('#text').html(o.temperature);
	    }
	};	
};