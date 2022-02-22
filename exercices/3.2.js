let newArray = [1,2,3,4,5];
let sum = 0;
let average = 0;


for (let i = 0; i < newArray.length; i++) {
    sum = sum + newArray[i];
    average = sum / newArray.length;

}

console.log(average);