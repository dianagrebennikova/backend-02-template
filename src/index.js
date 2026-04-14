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

  // Написать обработчик запроса:
  // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
  // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
});

server.listen(3003, () => {
  console.log("Cервер запущен по адресу http://127.0.0.1:3003");
});
