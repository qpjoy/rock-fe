const fileDom = document.querySelector("input[type=file]");
const btn = document.querySelector("button");

console.log(`[Image 2 Shadow]: `, fileDom, btn);

function loadImage() {
  const file = fileDom.files[0];
  if (!file) {
    return null;
  }
  const objUrl = URL.createObjectURL(file);
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      resolve(null);
    };
    img.src = objUrl;
  });
}

function createHTML(width, height, bmp) {
  const shadowCSSFragments = [];
  const shadowCSSHover = [];
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      const i = r * width + c;
      const R = bmp[i * 4],
        G = bmp[i * 4 + 1],
        B = bmp[i * 4 + 2];
      A = bmp[i * 4 + 3] / 255;
      shadowCSSFragments.push(`${c + 1}px ${r}px rgba(${R}, ${G}, ${B}, ${A})`);
      shadowCSSHover.push(
        `${c + 1}px ${r}px rgba(${255 - R}, ${255 - G}, ${255 - B}, ${A})`
      );
    }
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            .shadow-img {
                width: ${width}px;
                height: ${height}px;
            }
            .shadow-img .inner {
                width: 1px;
                height: 1px;
                box-shadow: ${shadowCSSFragments.join(", ")};
                transition: 1.5s
            }
            .shadow-img:hover .inner {
                box-shadow: ${shadowCSSHover.join(", ")};
            }
        </style>
    </head>
    <body>
        <div class="shadow-img">
            <div class="inner"></div>
        </div>
    </body>
    `;
}

function download(html) {
  var blob = new Blob([html], { type: "text/html" });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.style.display = "none";
  a.download = "demo.html";
  a.click();
}

async function generate() {
  const img = await loadImage();
  console.log(`[Generate]: `, img);
  if (!img) {
    return;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  const bmp = ctx.getImageData(0, 0, img.width, img.height).data;
  const html = createHTML(img.width, img.height, bmp);

  download(html);
}

btn.onclick = () => generate();
