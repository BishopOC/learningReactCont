var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname));

server.get('/', function(req,res){
  res.sendFile('index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Listening on port', port);
});
