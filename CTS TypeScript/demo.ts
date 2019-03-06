var arr = new Array();
arr[0] = 11;
arr[1] = "HIU";
arr[2] = true;
arr[3] = new Date();

for(let i in arr)
{
	console.log(arr[i]);
}

const x = 10;

//Template Strings--------------------

let str = `<html>
		<head>
		</head>
	    </html>`;

console.log(str);

let y = 20;

let str2 = `The sum is : ${x+y}`;
console.log(str2);







