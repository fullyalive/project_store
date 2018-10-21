const express = require("express");
const next = require("next");

const dev = process.env.Node_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); // 우리의 모든 request를 처리할것

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
