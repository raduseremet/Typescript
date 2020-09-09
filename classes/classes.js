"use strict";
// PUBLIC - cimpul cu proprietatea public poate fi folosit oriunde
// PRIVAT - doar in cadrul unei clase
// PROTECTED - in clasa in care a fost declarat si in clasele mostenitoare
// ABSTRACT - metodada careia este atribuita termenul abstract trebuie creata in fiecare subclasa
// 
// STATIC - metodele care au in fata cuvintul static pot fi apelate fara ca clasa in care se afla sa fie initiata
// PRIVATE CONSTRUCTOR - nu poate fi initiat din afara clasei, poate fi initiat doar din interiorul clasei si doar odata, celelalte metode pot fi apelate doar prin atribuirea termenului static in fata si prin intermediul clasei
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.arr = ['text', 20];
    }
    Department.prototype.ptintCompanyName = function () {
        console.log('Readcast', this.name);
    };
    Department.prototype.protectedMethod = function () {
        console.log(this.name + " some textasdfas");
    };
    Department.prototype.newArr = function (imput) {
        this.arr.push(imput);
    };
    return Department;
}());
var Sales = /** @class */ (function (_super) {
    __extends(Sales, _super);
    function Sales(name, members, manager) {
        var _this = _super.call(this, name) || this;
        _this.members = members;
        _this.manager = manager;
        return _this;
    }
    Sales.prototype.print = function () {
        console.log(this.protectedMethod);
    };
    Sales.prototype.abstractMethod = function () {
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    };
    Sales.getSaleInstances = function () {
        if (Sales.salesInstance) {
            return this.salesInstance;
        }
        var salesDepartment = new Sales('Sales Department', 21, true);
        return salesDepartment;
    };
    Sales.testMethod = function () {
        console.log('some text');
    };
    return Sales;
}(Department));
var It = /** @class */ (function (_super) {
    __extends(It, _super);
    function It(name, members, admin) {
        var _this = _super.call(this, name) || this;
        _this.admin = admin;
        _this.members = members;
        return _this;
    }
    It.prototype.abstractMethod = function () {
        console.log('Abstract method, se declara in clasa parinte si si este obligatorie pentru restul claselor');
    };
    It.staticKeyWord = function () {
        console.log("metoda care are cuvintul static in fata poate fi apelata direct fara a crea o instanta, prin intermediul denumiirii clasei");
    };
    It.getInstance = function () {
        if (It.instance) {
            this.instance;
        }
        this.instance = new It('It Department', 20, true);
        return this.instance;
    };
    It.salaryBonus = 2020;
    return It;
}(Department));
// const itDepartment = new It ('IT Departament', 10, true);
//const salesDepartment = new Sales ('Sales Departament', 10, true);
// console.log(It.getInstance());
//console.log(salesDepartment);
//console.log(itDepartment);
var createSaleInstance = Sales.getSaleInstances();
//console.log(createSaleInstance);
