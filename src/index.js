const http = require("http");
const getUsers = require("./modules/users.js");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const params = url.searchParams;

  if (params.has("hello")) {
    const name = params.get("hello");

    if (!name) {
      response.statusCode = 400;
      response.end("Enter a name");
      return;
    }

    response.statusCode = 200;
    response.end(`Hello, ${name}.`);
    return;
  }

  if (params.has("users")) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(getUsers());
    return;
  }

  if (url.search === "") {
    response.statusCode = 200;
    response.end("Hello, World!");
    return;
  }

  response.statusCode = 500;
  response.end();

});

server.listen(3003, () => {
  console.log("Cервер запущен по адресу http://127.0.0.1:3003");
});
