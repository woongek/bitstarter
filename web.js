var express = require('express');

var app = express.createServer(express.logger());

var buffer= new Buffer(fs.readFileSync('~/bitstarter/index.html'), "utf-8")

app.get('/', function(request, response) {
  response.send("what a world");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
