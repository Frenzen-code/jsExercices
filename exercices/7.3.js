const readlineSync = require("readline-sync");


let number;

do {
number = parseInt(readlineSync.question('Give me a integer'));

}while(number < 0 || isNaN(parseInt(number)));

for (let i = 0; i < number; i++) {
    if ((number  % i == 0) && (i!==1 && i !== number)) {
        console.log(i);
    }
}


