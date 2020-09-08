// Functions
function calcAge (currentYear:number, yearOfBirth:number):number{
    return currentYear - yearOfBirth;
}
//console.log(calcAge(2020, 1993));





// ? acest parametru este optional, in caz ca nu este declarat obtinem udefined
function getName(firstName:string, lastName?:string):string{

    if (lastName === undefined){

        return firstName
    }

    return firstName + ' ' + lastName
}

//console.log(getName('John'));






//  in cazul cind surname nu este declarat by default v-a primi valoarea 'Howking'
function fullName (name:string, surname:string = 'Howking' ):string {

    return name + " " + surname;
}

// console.log(fullName('Stephan'));





// in Js by default o functie returneaza undefind, in Ts functia daca nu returneaza nimic atunci returneaza void, trebuie sa indicam acest lucru

function consoleLog(fullName:string):void {

    console.log(fullName);
}

//consoleLog('John Lenon')

let calcSum2: (num1:number, num2:number) => number;

function calcSum(num1:number,  num2:number) {

    return num1 + num2;

}

calcSum2 = calcSum;

//console.log(calcSum2(10, 20));
//console.log(calcSum(1, 20));