var express = require('express'),
    passport = require('passport'),
    http = require('http'),
    html = require('html'),
    fs = require('fs'),
    // GoogleStrategy = require('passport-google').Strategy,
    app = express();

app.get('/hello', function(req, res){
    res.send('Hello World');
});

fs.readFile('../index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});

// var server = app.listen(3000, function() {
//     console.log('Listening on port %d', server.address().port);
// });