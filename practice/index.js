const http = require("http");
const fs = require("fs");
const port = 3001;
const hostName = "127.0.0.1";
const server = http.createServer((req, res) => {
  const handleReadFile = (fileLocation, statusCode) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile("./views/Home.html", 200);
  } else if (req.url === "/contact") {
    handleReadFile("./views/contact.html", 200);
  } else if (req.url === "/about") {
    handleReadFile("./views/about.html", 200);
  } else {
    handleReadFile("./views/error.html", 404);
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running successfully at http://${hostName}:${port} `);
});
