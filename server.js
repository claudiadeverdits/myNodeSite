// Load the http module.
var http = require('http');

// Load the file system module.
var fs = require('fs');

// Create a variable that stores the port number (i.e., 1337) at the beginning of your program.
const PORT = 1337;

// Create a function called serveStaticFile that tries to read the file located at the path being passed in. This function should include the following:
function serveStaticFile(res, path, contentType, responseCode){

    // Check if there is no HTTP status message and set it to the code telling the browser that everything is okay.
    if(!responseCode) {
        responseCode = 200;
    }

    // Try to read the file that is located at the path that is being passed in. 
    fs.readFile(__dirname + path, function(err, data){
        //If there is an error, then tell the browser that there was an internal error. 
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});

            res.end('500 - Internal Error');
        }
        //Otherwise, provide the browser with the response code, content type and data that was passed in.
        else{
            res.writeHead(responseCode,
                {'Content-Type': contentType});
            
                res.end(data);
        }
    });
}

// Use the createServer method from the http module to create an HTTP server. Include the following:
http.createServer(function(req, res){
    // Normalize the URL by removing the querystring, optional trailing slash, and making it lowercase. 
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path){

        // Serve each web page based on the path that a user has navigated to. Make sure to check the HTML files to determine what paths to check for. 
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;

        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        case '/ai-ml':
            serveStaticFile(res, '/public/ai-ml.html', 'text/html');
            break;

        case '/exollent':
            serveStaticFile(res, '/public/exollent.html', 'text/html');
            break;

        case '/products':
            serveStaticFile(res, '/public/products.html', 'text/html');
            break;

        case '/robochair':
            serveStaticFile(res, '/public/robochair.html', 'text/html');
            break;

        case '/tech':
            serveStaticFile(res, '/public/tech.html', 'text/html');
            break;

        // Serve the CSS file inside the css folder to show the appropriate style on the page.
        case '/styles/style.css':
            serveStaticFile(res, '/public/styles/style.css', 'text/css');
            break;

        // Serve each image inside the images folder to show appropriate images on the page.
        case '/images/ExollentConcept.png':
            serveStaticFile(res, '/public/images/ExollentConcept', 'image/png');
            break;

        case '/images/logo_black.png':
            serveStaticFile(res, '/public/images/logo_black.png', 'image/png');
            break;

        case '/images/logo_white.png':
            serveStaticFile(res, '/public/images/logo_white.png', 'image/png');
            break;

        case '/images/Pyramid.PNG':
            serveStaticFile(res, '/public/images/Pyramid.PNG', 'image/png');
            break;
        
        case '/images/robochair_home.png':
            serveStaticFile(res, '/public/images/robochair_home.png', 'image/png');
            break;

        case '/images/RoboChairBlankBackground.png':
            serveStaticFile(res, '/public/images/RoboChairBlankBackground.png', 'image/png');
            break;
        
        case '/scripts/products.js':
            serveStaticFile(res, 'public/scripts/products.js', 'text/javascript');
            break;

        case '/scripts/script.js':
            serveStaticFile(res, 'public/scripts/script.js', 'text/javascript');
            break;

        // Create a default case that serves the 404 page and sets the HTTP status code to not found in case something goes wrong. 
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }

// Tell the server what port to be on.
}).listen(PORT);
    

// Output the URL to access the server to the console.
console.log("Server running on: http://localhost:" + PORT);