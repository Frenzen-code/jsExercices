/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
       
        switch (operation) { 
            case "addition":
                alert(x + y);
                break; 
            case "substraction":
                alert(x - y);
                break;
            case "multiplication":
                alert(x * y);
                break;
            case "division":
                alert(x / y);
                break;
        } 
        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
