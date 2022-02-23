/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let operatorOne = parseInt(document.getElementById("op-one").value);
    let operatorTwo = parseInt(document.getElementById("op-two").value);
    const myInput = document.querySelector('input[name="op-one"]');
    myInput.addEventListener("change", (e) => {
        operatorOne = parseInt(document.getElementById("op-one").value); 
    });
    const myInput2 = document.querySelector('input[name="op-two"]');
    myInput2.addEventListener("change", (f) => {
        operatorTwo = parseInt(document.getElementById("op-two").value); 
    });

   

    document.getElementById("addition").addEventListener("click", function() {
        alert(operatorOne + operatorTwo);
    });

    document.getElementById("substraction").addEventListener("click", function() {
       alert(operatorOne - operatorTwo);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(operatorOne * operatorTwo);

    });

    document.getElementById("division").addEventListener("click", function() {
        alert(operatorOne / operatorTwo);

    });
})();
