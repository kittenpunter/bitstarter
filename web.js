var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var index = "index.html";

app.get('/', function(request, response) {
  var buffer = fs.readFileSync(index);
  var string = buffer.toString();
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
