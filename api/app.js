var express = require('express'),
    passport = require('passport'),
    // GoogleStrategy = require('passport-google').Strategy,
    app = express(),
    oneDay = 86400000;

//Need to update to point to root and auto load index.html
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.get('/hello', function(req, res){
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});