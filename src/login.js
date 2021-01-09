const remote = require('electron')
// const { remote } = require("electron");
const authService = require("./services/auth/auth.service");
// const path = require('path')
const axios = require('axios')
const screenshot = require('screenshot-desktop')
// const Store = require('electron-store');

// const store = new Store();

const loginBtn = document.getElementById('loginBtn')
const screen = document.getElementById('screen')
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const apiLogin = 'http://localhost:8000/api/login'


// setInterval(function(){ 
//     captureScreen() 
// }, 20000);

// function loginUser(){
//     axios.post(apiLogin, {
//         email: userEmail.value,
//         password: userPassword.value
//     })
//         .then((response) => {                        
//             const userData = response.data?.data
//             // store.set('userData', userData)
//             console.log('userData',userData)
//         }, (error) => {
//             console.log(error);
//         });
// }
loginBtn.addEventListener('click', function(){
    authService.login(userEmail.value, userPassword.value)    
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