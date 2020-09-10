"use strict";
// PUBLIC - cimpul cu proprietatea public poate fi folosit oriunde
// PRIVAT - doar in cadrul unei clase
// PROTECTED - in clasa in care a fost declarat si in clasele mostenitoare
// ABSTRACT - metodada careia este atribuita termenul abstract trebuie creata in fiecare subclasa
// 
// STATIC - metodele care au in fata cuvintul static pot fi apelate fara ca clasa in care se afla sa fie initiata
// PRIVATE CONSTRUCTOR - nu poate fi initiat din afara clasei, poate fi initiat doar din interiorul clasei si doar odata, celelalte metode pot fi apelate doar prin atribuirea termenului static in fata si prin intermediul clasei
class Department {
    constructor(name) {
        this.name = name;
        this.arr = ['text', 20];
    }
    ptintCompanyName() {
        console.log('Readcast', this.name);
    }
    protectedMethod() {
        console.log(`${this.name} some textasdfas`);
    }
    newArr(imput) {
        this.arr.push(imput);
    }
}
class Sales extends Department {
    constructor(name, members, manager) {
        super(name);
        this.members = members;
        this.manager = manager;
    }
    print() {
        console.log(this.protectedMethod);
    }
    abstractMethod() {
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    }
    static getSaleInstances() {
        if (Sales.salesInstance) {
            return this.salesInstance;
        }
        const salesDepartment = new Sales('Sales Department', 21, true);
        return salesDepartment;
    }
    static testMethod() {
        console.log('some text');
    }
}
class It extends Department {
    constructor(name, members, admin) {
        super(name);
        this.admin = admin;
        this.members = members;
    }
    abstractMethod() {
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    }
    static staticKeyWord() {
        console.log(`metoda care are cuvintul static in fata poate fi apelata direct fara a crea o instanta, prin intermediul denumiirii clasei`);
    }
    static getInstance() {
        if (It.instance) {
            this.instance;
        }
        this.instance = new It('It Department', 20, true);
        return this.instance;
    }
}
It.salaryBonus = 2020;
// const itDepartment = new It ('IT Departament', 10, true);
//const salesDepartment = new Sales ('Sales Departament', 10, true);
// console.log(It.getInstance());
//console.log(salesDepartment);
//console.log(itDepartment);
const saleInstance = Sales.getSaleInstances();
//console.log(createSaleInstance);
