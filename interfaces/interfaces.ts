
let user: {
    readonly name:string,
     age:number,
      description():void
} = {
    name: 'Maximilian',
    age: 27,
    description():void{
        console.log(`${this.name} is a designer`);
    }
}

// O metoda mai eleganta de a initia obiecte este prin  Interface,
// orice obiect care este de tipul Person trebuie sa contina toate cimpurile din Person


// am puteam folosi type Person = {readonly name:string, age:number, description():void}, dar interfaces este mai mult pentru obiecte, 

interface Person {
    readonly name:string, age:number, description():void
}

interface PersonJob { job: string}


let person: Person = {
    name: 'Maximilian',
    age: 27,
    description():void{
        console.log(`${this.name} is a designer`);
    }
}

console.log(person);

// person.name = 'Bob', acest lucru nu este permis deoarece odata atribuita valoarea lui name aceasta nu poate fi modificata


// Cu ajutorul la Interfaces putem forta clasele sa aiba o anumita tructura
class interfceClass implements Person { 

    constructor(public name:string, public age: number){
        this.age = age;
    }
    description(){
        console.log(`${this.name} is a designer`);
    }
}