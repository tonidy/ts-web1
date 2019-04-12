var http = require("http");

//create a server object:
http
  .createServer(function(req: any, res: any) {
    res.write("Hello World test! bisa"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

//export default module;
