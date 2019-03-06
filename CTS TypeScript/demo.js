var arr = new Array();
arr[0] = 11;
arr[1] = "HIU";
arr[2] = true;
arr[3] = new Date();
for (var i in arr) {
    console.log(arr[i]);
}
var x = 10;
//Template Strings--------------------
var str = "<html>\n\t\t<head>\n\t\t</head>\n\t    </html>";
console.log(str);
var y = 20;
var str2 = "The sum is : " + (x + y);
console.log(str2);
