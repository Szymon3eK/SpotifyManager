const {app, BrowserWindow, globalShortcut, Tray, Notification, Menu} = require('electron')
const path = require('path')
const sound = require("sound-play");



app.whenReady().then(() => {
    console.log('SpotifyManager Zaladowano!')
    new Notification({ title: 'WLACZONO APLIKACJE!', body: 'Pamietaj aby miec spotify wlaczonego!', icon: './images/SpotifyManagericon.ico' }).show()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

