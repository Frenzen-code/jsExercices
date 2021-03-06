/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
     let number = document.getElementById("number").value
     const myInput = document.querySelector('input[name="number"]');
     myInput.addEventListener("change", (e) => {
        number = parseInt(document.getElementById("number").value); 
    });

    document.getElementById("run").addEventListener("click", function() {

        function factorial(a) {
            //base case
            if(a == 0 || a == 1){
                return 1;
            //recursive case
            }else{
                return a * factorial(a-1);
            }
        }       
    let answer= factorial(number)
    alert(answer)
    });

})();
