function add1(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) { return x + y; };
console.log(add3(11, 22));
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        this.name = "Manish";
        /*var self = this;
        setTimeout(function()
                {
                    console.log("Name : "+self.name);
                },3000);

    */
        setTimeout(function () {
            console.log("Name : " + _this.name);
        }, 3000);
    }
    return User;
}());
var u1 = new User();
