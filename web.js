var express = require('express');

var app = express.createServer(express.logger());

var msg = fs.readFileSync('index.html')

app.get('/', function(request, response) {
  response.send('Hello World!' + msg.toString('utf8', 0, msg.length) ;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
