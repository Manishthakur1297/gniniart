export class Emp
{
	name;
	age;
	
	constructor(name, age)
	{
		this.name = name;
		this.age = age
	}
	
	display()
	{
		console.log('Name : '+this.name);	
		console.log("Age : "+this.age);	
	}
}

//var e1 = new Emp('Manish',21);
//e1.display();