/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


class person {
    constructor(lastname, firstname, age, city, country){
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        this.city = city;
        this.country = country;
       }
}

person1 = new person("Offermans","Philippe","31","Liège","Belgium");

(() => {
    document.getElementById("run").addEventListener("click", function(){
       
        console.log(person1);
       })
})();
