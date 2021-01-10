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


loginBtn.addEventListener('click', function(){
    authService.login(userEmail.value, userPassword.value)    
})