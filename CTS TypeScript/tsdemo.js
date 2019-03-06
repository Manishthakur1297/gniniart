var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log('Name : ' + this.name);
        console.log("Age : " + this.age);
    };
    return Emp;
}());
var e1 = new Emp('Manish', 21);
e1.display();
