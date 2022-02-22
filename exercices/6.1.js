class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

cat1 = new Cat("Skitty",9);
cat2 = new Cat("Pixel",6);


console.log(JSON.stringify(cat1));
console.log(JSON.stringify(cat2));
