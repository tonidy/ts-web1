import * as http from "http";

// Create a server
const server = http.createServer((req, res) => {
  // Get the request URL and method
  const { method, url } = req;

  // Set the response headers
  res.setHeader("Content-Type", "text/plain");

  // Handle routing based on the URL
  if (url === "/") {
    res.write("Hello World test! bisa");
  } else if (url === "/about") {
    res.write("About Us Page");
  } else if (url === "/contact") {
    res.write("Contact Us Page");
  } else {
    res.statusCode = 404;
    res.write("Page Not Found");
  }

  // End the response
  res.end();
});

// Start the server
const port = 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://:${port}`);
});
