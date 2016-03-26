var request = require('browser-request');

var options = {
	method:'POST', 
	url:'https://gcm-http.googleapis.com/gcm/send',
	headers: {
	  'Content-Type': 'application/json',
	  'Authorization': 'key=<YOUR-KEY>'
	}
};

var body = {
	data: {
		message: "hello world"
	},
	to: '/topic'
};

options.body = JSON.stringify(body);

request(options, function(er, res) {
  if(!er)
    return console.log('browser-request got your root path:\n' + res.body);
 
  console.log('err: failed');
});
