const http = require("http");

const port = 8081;

http
  .createServer((request, response) => {
    // console.log(request);
    // console.log(response);
    console.log(request.url);
  })
  .listen(port);

//localhost:8081

console.log("Server running at http://127.0.0.1:8081/");
