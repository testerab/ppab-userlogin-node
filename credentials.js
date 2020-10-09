
const systemPasswords = [
  ["anna", "password"],
  ["bob", "123"]
]
function isValidCredentials (username, password) {
  let suppliedCredentials = [];
  suppliedCredentials.push(username, password);
  console.log(suppliedCredentials);
  result =  systemPasswords.some( a => suppliedCredentials.every(
    (value, index) => value === a[index]
  ));
  return result;
}

module.exports =  {isValidCredentials};
