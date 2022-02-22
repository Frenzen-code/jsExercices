const readlineSync = require("readline-sync");
let favoriteNumber 
do {
favoriteNumber = readlineSync.question('what is your favorite number ?');
    
if (favoriteNumber != 42) {
    console.log("are you sure?");
    
    
}

} while (favoriteNumber != 42);