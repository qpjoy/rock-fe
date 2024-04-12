console.log(import.meta.env);

export function render() {
  document.getElementById("root").innerHTML = `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation 122234</a>
  `;
}

render();

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render();
  });
}
