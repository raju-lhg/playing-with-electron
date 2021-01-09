const {app, BrowserWindow} = require('electron')
const path = require('path')
const axios = require('axios')
const screenshot = require('screenshot-desktop')

const loginBtn = document.getElementById('loginBtn')
const screen = document.getElementById('screen')
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const apiLogin = 'http://localhost:8000/api/login'


// setInterval(function(){ 
//     captureScreen() 
// }, 20000);
loginBtn.addEventListener('click', function(){
    // captureScreen()
    axios.post(apiLogin, {
        email: userEmail.nodeValue,
        password: userPassword.value
    })
    .then((response) => {
    console.log(response);
    }, (error) => {
    console.log(error);
    });
})

function captureScreen(){
    screenshot({format: 'png'}).then((img) => {
      // img: Buffer filled with jpg goodness
      const image = img.toString('base64');
      console.log(image);
      screen.src = 'data:image/png;base64,' + image;
    }).catch((err) => {
      console.log(err);
    })
  }