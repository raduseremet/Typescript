
// Daca avem de creat doar un obiect il putem crea ca in exemplul de mai jos
// const car: { brand: string, yearOfProduction: number, calcAge: () => number, carInfo: () => string } 
// =  {
//     brand: 'Mercedes',
//     yearOfProduction: 2015,
//     calcAge: function():number {

//         return 2020 - this.yearOfProduction;

//     },
//     carInfo():string {
//         return  `${this.brand} anul ${this.yearOfProduction}`
//     }
// }

// const getAge = car.calcAge();
// const getCarInfo = car.carInfo();

// //console.log(getAge);
// //console.log(getCarInfo);



// // Daca aveam mai multe obiecte o buna practica este sa declaram proprietatie obiectului separat



// type User = {
//     name: string, 
//     surname:string, 
//     ageOfBirth:number, 
//     ages: () => number,
//     getAges?: () => number
// }

// const user1: User = {
//     name: 'Ion',
//     surname: 'Popescu',
//     ageOfBirth: 1990,
//     ages: function():number {
//        return 2020 - this.ageOfBirth;   
//     },
//     getAges(): number {
//         return 2020 - this.ageOfBirth
//     }
// }

// const user1Ages = user1.ages();

// console.log(user1Ages);


// const user2: User = {
//     name: 'Dan',
//     surname: 'Miron',
//     ageOfBirth: 1997,
//     ages: function():number {
//        return 2020 - this.ageOfBirth;   
//     }
// }

// const user2Ages = user2.ages();

// console.log(user2Ages);




// string/number
// const x:number = 10;
// const y:string = 'Mihai' 
// const z:number | string = 'Ion'

// // boolean
// let isMaried: boolean = true;
//     isMaried = false;

// // tuples

// type User = {name:string,surname:string, age:number, calcAge: () => string }



// const obj: User = {

//     name: 'Ion', 
//     surname: 'Popescu', 
//     age: 20,
//     calcAge: function():string{
//         return `${this.name} are ${this.age}`;
//     }
// }

// //console.log(obj);


// //console.log(obj.calcAge());


// type combinable =  number | string



// function combine(imp1:combinable, imp2:number|string, test: 'as-number' | 'as-string'){
   
//     let result;
//     if (typeof imp1 !== 'number' && typeof imp2  !== 'number'){
//         result = imp1 +' ' +imp2;
//     } else if (typeof imp1 !== 'string' && typeof imp2  !== 'string') {
//         result =  imp1 + imp2;
//     }

//     if(test === 'as-number'){
//        return result;
//     }
//     return result;
// }

// const combineNum = combine(30, 30, 'as-number');
// const combineStr = combine('Mark', 'Damian', 'as-string')
// console.log(combineNum, combineStr);

