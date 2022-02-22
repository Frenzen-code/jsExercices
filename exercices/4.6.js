const readlineSync = require("readline-sync");
function factorial(a) {
    //base case
    if(a == 0 || a == 1){
        return 1;
    //recursive case
    }else{
        return a * factorial(a-1);
    }
}
let a = readlineSync.question('give me a number');
answer = factorial(a)
console.log("The factorial of " + a + " is " + answer);