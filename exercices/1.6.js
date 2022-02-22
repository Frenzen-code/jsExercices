const readlineSync = require("readline-sync");

let number = readlineSync.question('give me a integer');
let number2 = readlineSync.question('give me a integer');

console.log(number%number2);