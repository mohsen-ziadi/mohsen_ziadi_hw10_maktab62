const http = require("http");
const fs = require("fs");

const port = 8081;
const errPage = "Somthing went wrong...!";

// frist example

http
  .createServer((request, response) => {
    // console.log(request.url);
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./Node_JS_5/Home.html", "utf-8", (err, data) => {
        if (err) return response.end(errPage);
        response.end(data);
      });
    }
  })
  .listen(port);

// secend example

// http
//   .createServer((request, response) => {
//     const readStream = fs.createReadStream("./node_JS_5/Home.html");
//     response.writeHead(200, { "Conten-type": "text/html" });
//     readStream.pipe(response);
//   })
//   .listen(port);

//localhost:8081

console.log("Server running at http://127.0.0.1:8081");
