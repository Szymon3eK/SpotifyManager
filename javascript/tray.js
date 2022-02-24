const {app, BrowserWindow, globalShortcut, Tray, Notification, Menu} = require('electron')
const path = require('path')
const sound = require("sound-play");

function createWindow () {

}



let tray = null

app.whenReady().then(() => {
  tray = new Tray('./images/SpotifyManagericon.ico')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Wyjscie',
      click() {
        app.quit();
        new Notification({ title: 'WYLACZONO APLIKACJE!', body: 'Do zobaczenia! 💜', icon: './images/SpotifyManagericon.ico' }).show()
      },

    },
    {
      label: 'Restart',
      click() {
        console.log('Restart aplikacji')
        app.relaunch()
        app.exit()
      },

    },
    {
      label: 'Opcje',
      click() {
        const optionsWindow = new BrowserWindow({
          width: 800,
          height: 800,
          icon: __dirname + './images/SpotifyManagericon.ico',
          frame: false,
          webPreferences: {
            preload: path.join(__dirname, './backendjs/preload.js')
          }
        })

        optionsWindow.loadFile('./website/optionsindex.html/')
      }
    }

  ])
  tray.setToolTip('SpotifyManager!')
  tray.setContextMenu(contextMenu)
})


module.exports = { tray }