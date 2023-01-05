const http = require("http");

http
    .createServer((request,response) =>{
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({data: 'Hello World!'}));
    })
    .listen(4001,() =>console.log("Servidor está rodando"));