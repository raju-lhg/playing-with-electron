const {app, BrowserWindow} = require('electron')
const path = require('path')
const axios = require('axios')

const loginBtn = document.getElementById('loginBtn')
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const apiLogin = 'http://localhost:8000/api/login'

loginBtn.addEventListener('click', function(){
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