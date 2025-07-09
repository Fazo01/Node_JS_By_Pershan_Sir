const http = require("http");
const { sumrequesthandler } = require("./sum");
// const
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome To Calculator</h1>
        <h3><a href="/calculator">Calculator Page</a></h3>
      </body>
</html>`);

    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <form action="/calculator_sum" method="POST" >
        <input type="text" placeholder="First number" name="first"/>
        <input type="text" placeholder="Second number" name="second"/>
        <input type="submit" value="SUM"/>
        </form>
      </body>
    </html>`);

    return res.end();
  } else if (req.url.toLowerCase() === "/calculator_sum" && req.method === "POST") {
     sumrequesthandler(req, res);
     return;
  }
  res.setHeader("Content-Type", "text/html");
    res.write('<h1>Hello</h1>')
    res.end()
});
const PORT = 3010;
server.listen(
  PORT,
  console.log(`This the server link http://localhost:${PORT}`)
);
