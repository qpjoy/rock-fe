const electron = require("electron");
const fs = require("fs");
const { app, BrowserWindow, ipcMain, dialog, Menu } = electron;

let win;
let filePath = undefined;

app.on("ready", () => {
  console.log("app is ready");
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("index.html");
  const menu = Menu.buildFromTemplate(menuTemplate);
});

const menuTemplate = [
  ...(process.platform == "darwin"
    ? [
        {
          label: app.getName(),
          submenu: [
            {
              role: "about",
            },
          ],
        },
      ]
    : []),
  {
    label: "File",
    submenu: [
      {
        label: "Save",
        accelerator: "CmdOrCtrl+S",
        click() {
          win.webContents.send("save-clicked");
        },
      },
      {
        label: "Save As",
        accelerator: "CmdOrCtrl+Shift+S",
        click() {
          filePath = undefined;
          win.webContents.send("save-clicked");
        },
      },
    ],
  },
  {
    role: "editMenu",
  },
  {
    role: "viewMenu",
  },
];
