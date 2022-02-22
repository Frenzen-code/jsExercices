
const readlineSync = require("readline-sync");

let age = parseInt(readlineSync.question('write a number between 1 and 7'));

switch(age) {
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("wednsday");
    break;
    case 4: 
    console.log("thursday");
    break;
    case 5: 
    console.log("friday");
    break;
    case 6: 
    console.log("saturday");
    break;
    case 7: 
    console.log("sunday");
    break;
    default: console.log("number should be between 1 and 7");
}