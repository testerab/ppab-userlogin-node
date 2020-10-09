const CryptoJS = require("crypto-js");

function HashPassword (password) {
  let hash = CryptoJS.SHA256(password);
  return hash.toString(CryptoJS.enc.Utf-8);
}

module.exports = {HashPassword}