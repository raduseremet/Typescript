"use strict";
let user = {
    name: 'Maximilian',
    age: 27,
    description() {
        console.log(`${this.name} is a designer`);
    }
};
let person = {
    name: 'Maximilian',
    age: 27,
    description() {
        console.log(`${this.name} is a designer`);
    }
};
console.log(person);
// person.name = 'Bob', acest lucru nu este permis deoarece odata atribuita valoarea lui name aceasta nu poate fi modificata
// Cu ajutorul la Interfaces putem forta clasele sa aiba o anumita tructura
class interfceClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.age = age;
    }
    description() {
        console.log(`${this.name} is a designer`);
    }
}
