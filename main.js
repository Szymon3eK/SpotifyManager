const {app, BrowserWindow, globalShortcut, Tray, Notification, Menu} = require('electron')
const path = require('path')
const sound = require("sound-play");

var SpotifyWebApi = require('spotify-web-api-node');

const { tray } = require("./javascript/tray.js")
const { appready } = require("./javascript/appready.js")
