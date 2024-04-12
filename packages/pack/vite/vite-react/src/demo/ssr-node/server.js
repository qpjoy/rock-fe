const express = require("express");
const app = express();
const fs = require("fs");

const { createServer: createViteServer } = require("vite");

createViteServer({
  server: {
    // 启动vite dev server
    // middlewareMode: "html",

    // static files 转给服务器
    middlewareMode: "ssr",
  },
}).then((vite) => {
  app.use(vite.middlewares);

  // production
  const template = fs.readFileSync("dist/client/index.html", "utf-8");
  app.get("*", async (req, res) => {
    const render = require("./dist/server/server-entry").render;
    const context = {};
    const html = await render(req.url, context);
    if (context.url) {
      res.redirect(301, context.url);
      return;
    }
    const responseHtml = template.replace("<!---APP_HTML--->", html);
    res.send("content-type", "text/html").send(reponseHtml);
  });

  // dev
  app.get("*", async (req, res) => {
    let template = fs.readFileSync("index.html", "utf-8");
    template = await vite.transformIndexHtml(req.url, template);
    const { render } = await vite.ssrLoadModule("/src/server-entry.jsx");
    const html = await render(req.url);
    const reponseHtml = template.replace("<!---APP_HTML--->", html);
    res.send("content-type", "text/html").send(reponseHtml);
  });
  app.listen(4000);
});
