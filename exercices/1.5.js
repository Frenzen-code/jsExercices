const readlineSync = require("readline-sync");

let number = readlineSync.question('give me a number with decimal');
let number2 = readlineSync.question('give me a number with decimal');

console.log(parseInt(number)* number2);