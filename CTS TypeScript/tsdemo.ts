class Emp
{
	private name:string;
	private age:number;
	
	constructor(name:string, age:number)
	{
		this.name = name;
		this.age = age
	}
	
	display():void
	{
		console.log('Name : '+this.name);	
		console.log("Age : "+this.age);	
	}
}

var e1 = new Emp('Manish',21);
e1.display();