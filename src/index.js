var ws = require('./websocket');
var $ = require('jquery');

$.fn.WebSocket = ws.WebSocket;

// Main application
$('.timeline').WebSocket();

// Form
var WebSocketClient = require('websocket').w3cwebsocket;
var client = new WebSocketClient('ws://localhost:8080/object/12345/send');
client.onopen = function() {
    console.log('WebSocket Server Connected');
};

$('#input-form').find('#submit').click(function(e) {
    e.preventDefault();

    var message = {
        message: $(this).parent().find('#message').val(),
        username: 'jollen',
        timestamp: new Date()
    };

    client.send(JSON.stringify(message));
});

$('.weather-temperature').each(function () {
	var self = $(this);
	var city = self.data('city');
	
	$.when(
		$.ajax({
		    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=2ab10d1d7c261f5cb373916cc1cf107f',
		    type: 'GET'
		}).done(function(msg) {
			var tempCelsius = parseInt(msg.main.temp - 273.15);
		    self.text(tempCelsius + '℃' + ' (' + city +')');
		})
	).done(function(e) {
		return;
	});
});