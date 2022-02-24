/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
function total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
  
    
    }
    return sum
    }


function moyenne(arr) {
    let sum= 0;
    let average;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        average = sum / arr.length;
    
    }
    return average
    }

    function minimum(arr) {
        Math.min(...arr);
        return Math.min(...arr);
    }

    function maximum (arr) {
        Math.max(...arr);
        return Math.max(...arr);
     }


function rand100() { 
    return  Math.floor(Math.random() * 100) + 1;
  
  }


function multiRand(n) {
    let arr =new Array();
    for(let i=0; i<n; i++)
     {
    arr.push(rand100())
    }
    return arr;
}

(function() {

    document.getElementById("run").addEventListener("click", function(){
        let userTab = new Array;
        userTab = multiRand(10);
        let min,max,avg,sum;
        for(i = 0; i < userTab.length; i++)
        {
            let j = i+1;
            document.getElementById("n-"+j).innerHTML = userTab[i];
        }
        min = minimum(userTab);
        document.getElementById("min").innerHTML = min;
        max = maximum(userTab);
        document.getElementById("max").innerHTML = max;
        avg = moyenne(userTab);
        document.getElementById("average").innerHTML = avg;
        sum = total(userTab);
        document.getElementById("sum").innerHTML = sum;
     })



})();
