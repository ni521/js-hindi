const accountId = 145001
let accountEmail = "nitin@gogle.com"
var accountPassword = "1234"
accountCity = "pathankot"
let accountState
  //accountId = 2// not allowed

accountEmail = "para@gmail.com"
accountPassword = "121212"
accountCity = "chandighar"

/*
Prefer not to use var
because of issue in block scope and funstional scope 
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])
