const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your firstname  please?');
let city = readlineSync.question('Can you give me your city please?');

console.log("Your name is " + firstName +" "+ name + " and your city is " + city);