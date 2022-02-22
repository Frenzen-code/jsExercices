const readlineSync = require("readline-sync");

// calculate the surface of a rectangle 

function calcSurface(lenght, width) {
    return lenght*width;
}
let lenght = readlineSync.question('give me a length');
let width = readlineSync.question('give me a width');

console.log(calcSurface(lenght, width)); 
