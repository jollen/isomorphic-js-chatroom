var ws = require('./websocket');
var $ = require('jquery');
var request = require('request');

$.fn.WebSocket = ws.WebSocket;

// Main application
$('.timeline').WebSocket();

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