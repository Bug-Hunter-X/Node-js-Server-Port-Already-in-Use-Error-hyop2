# Node.js Server Port Already in Use

This repository demonstrates a common error encountered when developing Node.js servers: the error that occurs when the specified port is already in use. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Bug

The `bug.js` file creates a simple HTTP server that listens on port 8080. If this port is already in use by another process (e.g., another Node.js server or a different application), the server will fail to start and may not produce a clear error message.

## Solution

The `bugSolution.js` file addresses this issue by adding error handling.  It uses a `try...catch` block to gracefully handle the `EADDRINUSE` error, which indicates that the address is already in use. If this error occurs, the server will attempt to listen on a different port and log the new port.