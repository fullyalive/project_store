const express = require("express");
const next = require("next");
const { resolve } = require("path"); // NodeJS path 모듈에서 resolve를 가지고 온다.
const dev = process.env.Node_ENV !== "production"; // NODE_ENV가 dev모드 일 때
const app = next({ dev }); // dev 모드인지 확인
const handle = app.getRequestHandler(); // 우리의 모든 request를 처리할것

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/sw.js", (req, res) => {
      app.serveStatic(req, res, resolve("./static/serviceWorker.js"));
    });

    server.get("/product/:id", (req, res) => {
      const actualPage = "/product";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:name", (req, res) => {
      const actualPage = "/category";
      const queryParams = { name: req.params.name }; // queryParameter는 같아야 한다. 13 title과  15 title 이 두개가 맞아야 됨
      app.render(req, res, actualPage, queryParams);
    }); // router masking으로 사용자에게 보여지는 url이 그대로 서버에 요청될때, 보여주는 페이지를 /post가 되도록

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("✅ Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1); // kill server
  });
