"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Emp_1 = require("./Emp");
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(name, age, salary, desig) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.desig = desig;
        return _this;
    }
    Clerk.prototype.displayAll = function () {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("Salary : " + this.salary);
        console.log("Designation : " + this.desig);
    };
    return Clerk;
}(Emp_1.Emp));
var e1 = new Clerk('Manish', 21, 80000, "Manager");
//e1.display();
e1.displayAll();
