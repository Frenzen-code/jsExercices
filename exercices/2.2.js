const readlineSync = require("readline-sync");

let minAge = readlineSync.question('give me min age');
let maxAge = readlineSync.question('maxAge');
let current = readlineSync.question('give me a current age')


if (current>minAge && current<maxAge) {
    console.log(current);
}

if (minAge>maxAge) {
    console.log("you're wrong stupid");
}
