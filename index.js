var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send('hello world');
});
  
app.listen(port, function () {
    console.log('App is running on port:' + port);
});