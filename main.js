const { app, BrowserWindow } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    width: 500,
    height: 350,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  window.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
