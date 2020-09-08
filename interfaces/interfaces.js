var user = {
    name: 'Maximilian',
    age: 27,
    description: function () {
        console.log(this.name + " is a designer");
    }
};
var person = {
    name: 'Maximilian',
    age: 27,
    description: function () {
        console.log(this.name + " is a designer");
    }
};
console.log(person);
// person.name = 'Bob', acest lucru nu este permis deoarece odata atribuita valoarea lui name aceasta nu poate fi modificata
// Cu ajutorul la Interfaces putem forta clasele sa aiba o anumita tructura
var interfceClass = /** @class */ (function () {
    function interfceClass(name, age) {
        this.name = name;
        this.age = age;
        this.age = age;
    }
    interfceClass.prototype.description = function () {
        console.log(this.name + " is a designer");
    };
    return interfceClass;
}());
