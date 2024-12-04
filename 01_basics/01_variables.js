const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // Not preferrable method
let accountState;


// accountId = 2 // Const modification is not allowed
/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail, accountPassword,
    accountCity , accountState
]);