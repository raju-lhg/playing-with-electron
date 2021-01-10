// Modules to control application life and create native browser window
const {app, BrowserWindow, remote} = require('electron')
const settings = require('electron-settings')
const screenshot = require('screenshot-desktop')
const path = require('path')
const url = require('url')
const axios = require('axios')

const apiBase = 'http://localhost:8000/api/'

function createWindow () {
  settings.has('userData').then(userData => {
    
    
  });

  console.log('File used for Persisting Data - ' +
    settings.file());
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: 'images/favicon.ico',
    icon: __dirname + 'images/favicon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname, 'src/login.html'), 
    protocol: 'file', 
    slashes: true
  }))
  mainWindow.setMenuBarVisibility(false)
  mainWindow.webContents.openDevTools();
  
  const ses = mainWindow.webContents.session
}

function sendImage(image){
  axios.post(apiBase + 'capture-image', {
      image: image,
  })
  .then((response) => {
  }, (error) => {
  console.log(error);
  });
}

function captureScreen(){
  screenshot({format: 'png'}).then((img) => {
    const image = img.toString('base64');
    sendImage(image)
  }).catch((err) => {
    console.log(err);
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  setInterval(function(){ 
      captureScreen() 
  }, 300000);
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
