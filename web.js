const accountId = 144553
let accountEmail = "Debasish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"
/*
    Prefer not to user var
    because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountId, accountCity,accountState]);