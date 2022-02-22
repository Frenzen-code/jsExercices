class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return "Hello " + this.firstname + " " + this.lastname + "!"
    }
}

person= new Person("Jean-Marie","Rafina");


console.log(person.sayHello());