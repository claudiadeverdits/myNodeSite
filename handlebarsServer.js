const express = require('express');
const app = express();
const port = 1337;

var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const dir = __dirname + '/public/';

app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));

app.get(['/index', '/'], function(request, response){
    response.render('index');
});

app.get('/products', function(request, response){
    response.render('products');
});

app.get('/robochair', function(request, response){
    response.render('robochair');
});

app.get('/tech', function(request, response){
    response.render('tech');
});

app.get('/exollent', function(request, response){
    response.render('exollent');
});

app.get('/ai-ml', function(request, response){
    response.render('ai-ml');
});

//page not found
app.use(function(request, response){
	
	// tell the browser the route cannot be found
	response.status(404);

	// write that the page cannot be found to the body of the page
	response.render('404')
});

//internal server error
app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	// tell the browser that there was an internal server error
	response.status(500);
	
	// write there was an internal server error to body of the page
	response.render('500')
});

app.listen(port, function() {
    console.log('Listening on http://localhost:' + port + ' press ctrl+c to quit...');
});