const { app, BrowserWindow } = require("electron")

const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "ImageShrink",
        height: 500,
        width: 600
    })
}
app.on('ready', createMainWindow)