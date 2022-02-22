const readlineSync = require("readline-sync");

let n = readlineSync.question('give me a number');
let number
let total = 0

for (let i = 0; i <n; i++) {
   number= parseInt(readlineSync.question('give me a number'));
   total= number+total
}

console.log(total);