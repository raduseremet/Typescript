// public - cimpul cu proprietatea public poate fi folosit oriunde
// privat - doar in cadrul unei clase
// protected - in clasa in care a fost declarat si in clasele mostenitoare
// abstract - metodada careia este atribuita termenul abstract trebuie creata in fiecare subclasa
// 
// static - metodele care au in fata cuvintul static pot fi apelate fara ca clasa in care se afla sa fie initiata


abstract class Department  {

    arr: (string|number)[] = ['text', 20];

    constructor(public name:string){

    }

    ptintCompanyName(){
        console.log('Readcast',this.name);
    }
    protected protectedMethod() {
        console.log(`${this.name} some textasdfas`);
    }
    newArr(imput: string |number){
        this.arr.push(imput)
    }
    abstract abstractMethod(this: Department):void;

}


class Sales extends Department {
    members: number
    manager: boolean

    constructor(name:string, members: number, manager:boolean) {
        super(name);
        this.members =  members;
        this.manager = manager;
    }
    print(){
        console.log(this.protectedMethod);
    }
    abstractMethod(){
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    }

}



class It extends Department {

    static salaryBonus = 2020;

    admin: boolean
    members: number

    constructor(name:string, members: number, admin: boolean) {
        super(name)
        this.admin = admin;
        this.members = members
    }
    abstractMethod(){
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    }
    static staticKeyWord() {
        console.log(`Bonus pentru performanta ${It.salaryBonus}`);
    }

}


It.staticKeyWord();

const itDepartment = new It ('IT Departament', 10, true);
const salesDepartment = new Sales ('Sales Departament', 10, true);


console.log(salesDepartment);
console.log(itDepartment);