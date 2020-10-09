const credentials = require("./credentials.js");
const prompt = require('prompt-sync')({sigint: true});


const username = prompt('username: ');
const password = prompt.hide('password: ');
if (credentials.isValidCredentials(username,password)) {
console.log('login successful')
} else {
console.log('Sorry, username or password incorrect');
}