const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const findAvailablePort = (port) => {
    return new Promise((resolve) => {
        const server = http.createServer().listen(port, () => {
            server.close(() => {
                resolve(port);
            });
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(findAvailablePort(port + 1));
            } else {
                console.error(err);
            }
        });
    });
};

async function startServer(port) {
  try {
    const availablePort = await findAvailablePort(port);
    server.listen(availablePort, () => {
      console.log(`Server is running at http://localhost:${availablePort}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer(8080);