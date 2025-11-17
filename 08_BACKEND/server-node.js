const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req,res) => {
    if (res.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end("Mr Sudir");
    } else if(req.url === '/login'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end("login successful");

    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/plain');
        res.end("404 Not found");
    }
})

server.listen(port,hostname, ()=> {
    console.log(`Server is Listening at http://${hostname}:${port}`);
})