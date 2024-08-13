const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    console.log('connection successful');
    console.log('HTTP Method:', req.method);
    console.log('Http Url :', req.url);

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Homepage</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('About page')
    } else {
        res.writeHead(404);
        res.end('Not found!')
    }
})

server.listen(8000);
console.log(`Server running at http://127.0.0.1:${port}`);