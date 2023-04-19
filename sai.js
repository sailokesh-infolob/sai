// Import the 'http' module
const http = require('http');

// Create a server with a callback function that handles incoming requests
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  // Write the response body
  res.write('Hello, World!');
  // End the response
  res.end();
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
