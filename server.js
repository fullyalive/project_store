const express = require("express");
const next = require("next");

const dev = process.env.Node_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); // 우리의 모든 request를 처리할것

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/post/:title", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.title }; // queryParameter는 같아야 한다. 13 title과  15 title 이 두개가 맞아야 됨
      app.render(req, res, actualPage, queryParams);
    }); // router masking으로 사용자에게 보여지는 url이 그대로 서버에 요청될때, 보여주는 페이지를 /post가 되도록

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
