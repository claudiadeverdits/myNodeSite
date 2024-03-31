const express = require('express');
const app = express();
const port = 1337;

const dir = __dirname + '/public/';

app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));

app.get(['/index', '/'], function(request, response){
    response.sendFile(dir + 'index.html');
});

app.get('/products', function(request, response){
    response.sendFile(dir + 'products.html');
});

app.get('/robochair', function(request, response){
    response.sendFile(dir + 'robochair.html');
});

app.get('/tech', function(request, response){
    response.sendFile(dir + 'tech.html');
});

app.get('/exollent', function(request, response){
    response.sendFile(dir + 'exollent.html');
});

app.get('/ai-ml', function(request, response){
    response.sendFile(dir + 'ai-ml.html');
});

app.get('/*', function(request, response){
    response.sendFile(dir + '404.html');
});

app.listen(port, function() {
    console.log('Listening on http://localhost:' + port + ' press ctrl+c to quit...');
});