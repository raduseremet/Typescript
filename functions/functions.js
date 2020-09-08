"use strict";
// Functions
function calcAge(currentYear, yearOfBirth) {
    return currentYear - yearOfBirth;
}
//console.log(calcAge(2020, 1993));
// ? acest parametru este optional, in caz ca nu este declarat obtinem udefined
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
//console.log(getName('John'));
//  in cazul cind surname nu este declarat by default v-a primi valoarea 'Howking'
function fullName(name, surname) {
    if (surname === void 0) { surname = 'Howking'; }
    return name + " " + surname;
}
// console.log(fullName('Stephan'));
// in Js by default o functie returneaza undefind, in Ts functia daca nu returneaza nimic atunci returneaza void, trebuie sa indicam acest lucru
function consoleLog(fullName) {
    console.log(fullName);
}
//consoleLog('John Lenon')
var calcSum2;
function calcSum(num1, num2) {
    return num1 + num2;
}
calcSum2 = calcSum;
//console.log(calcSum2(10, 20));
//console.log(calcSum(1, 20));
