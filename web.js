var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  // file is included here:
  includefile = fs.readFileSync('index.html').toString;
  response.send(includefile);
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening On " + port);
});
