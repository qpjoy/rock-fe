const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New Todo",
      },
      //   {
      //     label: "Quit",
      //     click() {
      //       app.quit();
      //     },
      //   },
    ],
  },
];

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

if (process.platform === "darwin") {
  menuTemplate.unshift({});
}
