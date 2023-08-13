const http = require("http");
const PORT = 3000;

const routes = {
  "/": "Course of NodeJs",
  "/books": "List of books",
  "/authors": "List of authors",
  "/editor": "List of editors",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(routes[req.url] || "404 - Not Found");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
