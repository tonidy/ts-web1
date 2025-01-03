import * as http from "http"; // Use the correct import syntax for TypeScript

// Create a server object
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.write("Hello World test! bisa"); // Write a response to the client
  res.end(); // End the response
});

// The server listens on port 8080
server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
