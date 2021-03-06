var fs = require('fs');
var buffer = fs.readFileSync('./index.html');
buffer = buffer.toString('utf-8'); 
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buffer);
});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
