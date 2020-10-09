const Hash = require("./hash.js");

const systemPasswords = [
  ["anna", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"],
  ["bob", "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"],
  ["anna", "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"]
]
function isValidCredentials (username, password) {
  let suppliedCredentials = [];
  let hashedPassword = Hash.HashPassword(password);
  suppliedCredentials.push(username, hashedPassword);
  result =  systemPasswords.some( a => suppliedCredentials.every(
    (value, index) => value === a[index]
  ));
  return result;
}

module.exports =  {isValidCredentials};
