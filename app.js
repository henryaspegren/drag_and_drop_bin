var app = require('express')();
var http = require('http').Server(app);

// set port default port to be 3000
var port = process.env.PORT || 3000;

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// main page
app.get('/', function(req, res){
  res.sendfile('index.html');
});

// upload API
app.post('/upload', function(req,res){
  res.send(200).end();
  console.log("FILE RECIEVED");
});


// configure server
http.listen(port, function(){
  console.log('listening on '+port);
});
