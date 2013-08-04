var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var text = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(text.toString('utf8', 0, text.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
