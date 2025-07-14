const accountId = 14453
let accountEmail = "zain@gmail.com"
var accountPassword = "12345"
accountCity = "Islamabad"
let accountState;

// accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Lahore"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/