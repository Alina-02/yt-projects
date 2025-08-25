const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");

const url = require("url");
const path = require("path");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "WorkFaster",
    width: 400,
    height: 400,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Path to preload script
      contextIsolation: true, // Keeps context isolated for security
      nodeIntegration: false, // Disables Node.js in the renderer (security best practice)
    },
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "../build/index.html"), //connect to the react app
    protocol: "file:",
    slashes: true,
  });

  mainWindow.setMenuBarVisibility(false);

  mainWindow.loadURL(startUrl); // load app in electron window

  ipcMain.on("close-app", () => {
    app.quit();
  });
}

app.whenReady().then(createMainWindow);

// Closes the app completely
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Reopens the window if the app is activated and no windows are open (macOS behavior)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
