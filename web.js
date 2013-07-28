var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/public'));

var fs = require('fs');

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
