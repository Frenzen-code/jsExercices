const readlineSync = require("readline-sync");

function rand100() { 
    return  Math.floor(Math.random() * 100) + 1;
  }
  
let randomNumber = rand100();
let userGuess;

do{
    let userGuess = readlineSync.question('Give me a number between 1 and 100');
    if (userGuess < randomNumber) {
        console.log("Too small, try again");
    } else if (userGuess > randomNumber) {
        console.log("Too big, try again");
    } else {
        console.log("Well done !");
    }

}while(randomNumber != userGuess);

