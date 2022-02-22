const readlineSync = require("readline-sync");

let age = readlineSync.question('give me your age');

if (age<18) {
    console.log("you're not an adult yet");
} else {
    console.log("you're an adult");
}