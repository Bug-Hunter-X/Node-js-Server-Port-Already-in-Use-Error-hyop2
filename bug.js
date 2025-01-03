const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');
//The above code may throw an error if port 8080 is already in use by another process.  This would not be immediately obvious to a beginner.