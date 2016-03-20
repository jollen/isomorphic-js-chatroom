'use strict';

var $ = require('jquery');
require('jsrender')($);
var WebSocketClient = require('websocket').w3cwebsocket;
var moment = require('moment');

module.exports.WebSocket = function() {
	var self = this;
	var client = new WebSocketClient('ws://wot.city/object/12345/viewer');
	var tmpl = $.templates("#message-item");

	client.onopen = function() {
	    console.log('WebSocket Client Connected');

	    var histories = sessionStorage.histories;

	    if (typeof histories !== 'string') {
	    	sessionStorage.histories = "[]"
	    	return;
	    }

	    
		histories = JSON.parse(histories);

	    histories.forEach(function (message) {
	    	message.moment = moment(message.timestamp).fromNow();
	    });

		var html = tmpl.render(histories.reverse());
		self.html(html);
	};

	client.onmessage = function(e) {
	    if (typeof e.data === 'string') {
	    	var o = JSON.parse(e.data);
	    	var styleName = '';

	    	if ( !o.message )
	    		return;

	    	if ( '' + o.username === 'jollen' )
	    		styleName = 'timeline-inverted';

	    	var histories = JSON.parse(sessionStorage.histories);

	    	var messages = {
	    		message: o.message,
	    		username: o.username || 'guest',
	    		styleName: styleName,
	    		timestamp: o.timestamp
	    	};

	   		histories.push(messages);
	    	sessionStorage.histories = JSON.stringify(histories);

	    	histories.forEach(function (message) {
	    		message.moment = moment(message.timestamp).fromNow();
	    	});

			var html = tmpl.render(histories.reverse());
			self.html(html);
	    }
	};
};
