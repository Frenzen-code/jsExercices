const readlineSync = require("readline-sync");

newArray = []

// return a random number between 1 and 10
function rand10() { 
    return  Math.floor(Math.random() * 10) + 1;
  
  }


function multiRand(n) {
    for(let i=0; i<n; i++)
    newArray.push(rand10())
    
}

let n = readlineSync.question('give me a number');
multiRand(n)

console.log(newArray);


  
 