import {Emp} from './Emp'; 
class Clerk extends Emp
{
	salary;
	desig;
	constructor(name, age, salary, desig)
	{
		super(name, age);
		this.salary = salary;
		this.desig = desig;
	}

	displayAll()
	{
		console.log("Name : "+this.name);
		console.log("Age : "+this.age);
		console.log("Salary : "+this.salary);
		console.log("Designation : "+this.desig);
	}

}

var e1 = new Clerk('Manish',21,80000,"Manager");
//e1.display();
e1.displayAll();