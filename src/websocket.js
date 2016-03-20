'use strict';

var $ = require('jquery');
require('jsrender')($);
var WebSocketClient = require('websocket').w3cwebsocket;
var moment = require('moment');

module.exports.WebSocket = function() {
	var self = this;
	var client = new WebSocketClient('ws://wot.city/object/12345/viewer');

	client.onopen = function() {
	    console.log('WebSocket Client Connected');
	};

	client.onmessage = function(e) {
	    if (typeof e.data === 'string') {
	    	var o = JSON.parse(e.data);
	    	var styleName = '';

	    	var tmpl = $.templates("#message-item");

	    	if ( !o.message )
	    		return;

	    	if ( '' + o.username === 'jollen' )
	    		styleName = 'timeline-inverted';

	    	var messages = [{
	    		message: o.message,
	    		username: o.username || 'guest',
	    		styleName: styleName,
	    		timestamp: moment(o.timestamp).fromNow()
	    	}];

			var html = tmpl.render(messages);
			self.prepend(html);
	    }
	};
};
