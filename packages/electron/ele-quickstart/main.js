const { ipcMain, dialog, MessageChannelMain } = require("electron");
const { app, BrowserWindow, Menu } = require("electron/main");
const path = require("node:path");

function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (!canceled) {
    return filePaths[0];
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => win.webContents.send("update-counter", 1),
          label: "Increment",
        },
        {
          click: () => win.webContents.send("update-counter", -1),
          label: "Decrement",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  ipcMain.on("set-title", handleSetTitle);

  ipcMain.handle("ping", () => "pong");

  ipcMain.handle("dialog:openFile", handleFileOpen);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping" in the Node console
  // works like `send`, but returning a message back
  // to the renderer that sent the original message
  event.reply("asynchronous-reply", "pong");

  event.returnValue = "pong";
});

ipcMain.on("counter-value", (_event, value) => {
  console.log(value); // will print value to Node console
});

ipcMain.on("port", (event) => {
  const port = event.ports[0];

  port.on("message", (event) => {
    const data = event.data;
  });

  port.start();
});

app.whenReady().then(async () => {
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: false,
      preload: "preloadMain.js",
    },
  });

  const secondaryWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: false,
      preload: "preloadSecondary.js",
    },
  });

  const { port1, port2 } = new MessageChannelMain();
  mainWindow.once("ready-to-show", () => {
    mainWindow.webContents.postMessage("port", null, [port1]);
  });

  secondaryWindow.once("ready-to-show", () => {
    secondaryWindow.webContents.postMessage("port", null, [port2]);
  });
});

app.whenReady().then(async () => {
  const worker = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  await worker.loadFile("worker.html");

  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile("app.html");

  mainWindow.webContents.mainFrame.ipc.on("request-worker-channel", (event) => {
    const { port1, port2 } = new MessageChannelMain();
    worker.webContents.postMessage("new-client", null, [port1]);
    event.senderFrame.postMessage("provide-worker-channel", null, [port2]);
  });
});

ipcMain.on("give-me-a-stream", (event, msg) => {
  const [replyPort] = event.ports;

  for (let i = 0; i < msg.count; i++) {
    replyPort.postMessage(msg.element);
  }
  replyPort.close();
});

app.whenReady().then(async () => {
  const bw = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  bw.loadURL("index.html");
  const { port1, port2 } = new MessageChannelMain();
  port2.postMessage({ test: 21 });
  port2.on("message", (event) => {
    console.log("from renderer main world:", event.data);
  });

  port2.start();

  bw.webContents.postMessage("main-world-port", null, [port1]);
});
