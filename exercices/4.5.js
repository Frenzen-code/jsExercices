const readlineSync = require("readline-sync");

function calcDistance(a,b) {

    let xdiff= b[0]-a[0];
    let ydiff= b[1]-a[1]
    return Math.sqrt((Math.pow(xdiff,2) + Math.pow(ydiff,2)));
}


let arr1 = [1,1];
let arr2 = [3,1];
let dist = calcDistance(arr1,arr2);
console.log(dist);