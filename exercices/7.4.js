const readlineSync = require("readline-sync");

function displayMenu() {
    console.log("Please choose your actions:\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program\n");
    number= parseInt(readlineSync.question("Enter your action's number:"));
    console.clear();

}


class Pizzas {
    constructor(){
        this.pizzas = []
    }
    newPizza(flavor){
        let myPizza = new Pizza(flavor);
        this.pizzas.push(myPizza);
        
    }
    removePizza() {
        let index = parseInt(readlineSync.question("Choose the number of the pizza you want to delete:"));
                this.pizzas.splice(index-1 ,1)
                }
   
    get showPizzas(){
        return this.pizzas
    }
}
class Pizza {
    constructor(flavor) {
        this.flavor = flavor;
    }
}

console.log("Hello! Welcome to the Pizza Flavors Manager.")
let number;
let allPizzas = new Pizzas
do {
    displayMenu()
    switch(number) {
        case 1:
            console.log(allPizzas.showPizzas);
            number= -1;
        break;
        case 2:
            let myFlavor = readlineSync.question("Enter the new flavor:")
            allPizzas.newPizza(myFlavor)
            number = -1;
        break;  
        case 3:
            console.log(allPizzas);
            allPizzas.removePizza() 
            console.clear();
            console.log(allPizzas.showPizzas)

            number = -1;
        break;
        case 4:
        break;
        default:
            console.log("Error")
        break;
    }
}while((number < 0 || number>4) || isNaN(parseInt(number)))
 
 



