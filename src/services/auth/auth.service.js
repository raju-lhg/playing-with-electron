// services/auth/auth-service.js

const axios = require("axios");
const url = require("url");
const os = require("os");
const settings = require('electron-settings')

const apiLogin = 'http://localhost:8000/api/login'
const apiLogOut = 'http://localhost:8000/api/logout'



let accessToken = null;
let profile = null;

function getAccessToken() {
    return accessToken;
}

function getProfile() {
    return profile;
}

async function login(username, password) {
    axios.post(apiLogin, {
        email: userEmail.value,
        password: userPassword.value
    })
    .then((response) => {
        let responsData = response.data?.data
        const userData = response.data?.data?.user
        profile = userData
        accessToken = responsData.accessToken
        console.log('API User', responsData)
        settings.set('userData', userData)
    }, (error) => {
        console.log(error);
    });
    accessToken = null;
    profile = null;
}
async function logout() {
    accessToken = null;
    profile = null;
}

module.exports = {
    getAccessToken,
    getProfile,
    login,
    logout
};