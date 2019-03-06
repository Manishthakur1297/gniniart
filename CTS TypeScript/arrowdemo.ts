function add1(x,y)
{
	return x+y;
}

var add2 = function(x,y){
	return x+y;
}

var add3 = (x,y)=>x+y;
console.log(add3(11,22));


class User
{
	name="Manish";
	
	constructor()
	{
		/*var self = this;
		setTimeout(function()
				{
					console.log("Name : "+self.name);
				},3000);

	*/
	setTimeout(()=>{
		console.log("Name : "+this.name);},3000);
	}

}

var u1 = new User();