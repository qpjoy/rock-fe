const path = require("path");
const fs = require("fs");

const template = fs.readFileSync("dist/client/index.html", "utf-8");
const render = require("./dist/server/server-entry").render;

const routesToRender = fs.readFileSync("src/pages").map(() => {
  return file.replace(".jsx", "").toLowerCase();
});

for (const route of routesToRender) {
  const context = {};
  const html = render(route, context).then((html) => {
    const responseHtml = template.replace("<!---APP_HTML--->", html);

    const filePath = `dist/static/${route}.html`;
    fs.writeFile(filePath, responseHtml);
    console.log(`prerender ${filePath}`);
  });
}
