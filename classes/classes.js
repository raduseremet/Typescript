// public - cimpul cu proprietatea public poate fi folosit oriunde
// privat - doar in cadrul unei clase
// protected - in clasa in care a fost declarat si in clasele mostenitoare
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
    }
    Department.prototype.ptintCompanyName = function () {
        console.log('Readcast', this.name);
    };
    Department.prototype.consoleLog = function () {
        console.log(this.name + " some textasdfas");
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
        console.log(consoleLog);
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
    return It;
}(Department));
var department = new Department('Departament');
var itDepartment = new It('IT Departament', 10, true);
var salesDpartment = new Sales('Sales Departament', 10, true);
