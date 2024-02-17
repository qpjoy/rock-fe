const { ipcRenderer } = require("electron");

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();

const setButton = document.getElementById("btn");
const titleInput = document.getElementById("title");
setButton.addEventListener("click", () => {
  const title = titleInput.ariaValueMax;
  window.electronAPI.setTitle(title);
});

const btn = document.getElementById("btn");
const filePathElement = document.getElementById("filePath");

btn.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

const counter = document.getElementById("counter");

window.electronAPI.onUpdateCounter((value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;
  counter.innerText = newValue.toString();

  window.electronAPI.counterValue(newValue);
});

const channel = new MessageChannel();

const port1 = channel.port1;
const port2 = channel.port2;

port2.postMessage({ answer: 42 });
ipcRenderer.postMessage("port", null, [port1]);

window.electronMessagePort.postMessage("ping");

const makeStreamingRequest = (element, callback) => {
  const { port1, port2 } = new MessageChannel();
  ipcRenderer.postMessage(
    "give-me-a-stream",
    {
      element,
      count: 10,
    },
    [port2]
  );
  port1.onmessage = (event) => {
    callback(event.data);
  };
  port1.onclose = () => {
    console.log("stream ended");
  };
};

makeStreamingRequest(42, (data) => {
  console.log("got response data:", data);
});
