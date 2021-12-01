const http = require("http");
const fs = require("fs");
const port = 8081;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Hello World");
    } else if (req.url === "/person") {
      fs.readFile("./Node_JS_2/person.json", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
    } else {
      res.end(`The url "${req.url}" not found.`);
    }
  })
  .listen(port);

console.log("Server running at http://127.0.0.1:8081/");
