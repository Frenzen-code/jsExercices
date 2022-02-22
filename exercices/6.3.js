class Animal {
    constructor(greeting, name) {
        this.greeting = greeting;
        this.name = name;
    }
    
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal {};
class Dog extends Animal {};

cat1 = new Cat("miaou","Mina");
dog1 = new Dog("ouaf","Doggo");

console.log(dog1.sayHello());
console.log(cat1.sayHello());