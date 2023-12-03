const http = require('http');

http.createServer(function (req, res) {
    switch (req.url) {
        case '/':
            res.write("<h1>my Home page<h1>");
            break;
        case '/usman':
            res.write("<h1>usman page<h1>");
            break;
        default:
            res.write("page not found....");
            break;
    }
    res.end();
}).listen(8000);