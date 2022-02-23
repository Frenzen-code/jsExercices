/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function ask() {
    let age = prompt("What is your age ?")
    let gender = prompt("What is your gender ?")
    let town = prompt("where do you live ? ")
  let answer = confirm(`You're ${age} your gender is ${gender} and you live ${town}.`)
     
   if(answer == true){
    return true;
} else {
   ask()
} 

}

ask()