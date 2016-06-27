var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('public/html/index.html', { root: __dirname })
});

app.listen(port, function(req, res) {
    console.log('Now listening on port ... ' + port);
});
