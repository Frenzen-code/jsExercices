/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get getterName() { 
            return this.firstname + ' ' + this.lastname;
        }
        set setName(Fullname){
            let array = Fullname.split(" ");
            this.firstname = array[0]
            this.lastname = array[1]
        }
    }
    document.getElementById("run").addEventListener("click", function() {
        
        person = new Person("Philippe" ,"Offermans");
        console.log(person.getterName);
        person.setName="Raphael Kezzou"
        console.log(person.getterName);
      })

})();
