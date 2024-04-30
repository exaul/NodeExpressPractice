/*Usando Node Http*/

//Función anónima = "() => {}"

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Requerimiento entrante");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

server.listen(3005);
