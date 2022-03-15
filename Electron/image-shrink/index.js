const { app, BrowserWindow } = require("electron")

process.env.NODE_ENV = "development";
const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform !== 'darwin' ? true : false;
let mainWindow;
console.log(isDev)
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: "ImageShrink",
        height: 500,
        width: 600,
        resizable: !isDev ? false : true,
        icon: "./assets/icon.png",
    })
    // mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    mainWindow.loadFile("./app/index.html")
}
app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})
app.whenReady().then(() => {
    createMainWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('ready', createMainWindow)