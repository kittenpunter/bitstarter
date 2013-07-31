var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var htmlfile = "index.html";

app.get('/', function(request, response) {
  var buffer = fs.readFileSync(htmlfile);
  var string = buffer.toString();
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
