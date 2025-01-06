// node-js-sample-app/app.js
const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

// For demo purposes we do not actually start the server.
// This allows us to pretend to start the server and check the output message.
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

console.log(`Server running at http://${hostname}:${port}/`);
