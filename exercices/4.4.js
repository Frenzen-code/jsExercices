const readlineSync = require("readline-sync");

let newArray = [];
  let  sum = 0

function average (newArray) {
    
for (let i = 0; i < newArray.length; i++) {
    sum = sum + newArray[i];
    average = sum / newArray.length;

}
return average
}

function min (newArray) {
    Math.min(...newArray);
    return Math.min(...newArray);
}

function max (newArray) {
   Math.max(...newArray);
   return Math.max(...newArray);
}




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
console.log(min(newArray));
console.log(average(newArray));
console.log(max(newArray));