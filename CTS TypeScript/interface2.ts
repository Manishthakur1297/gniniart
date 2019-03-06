interface I
{
    abc():void;
}

interface J
{
    xyz():string;

    

}

class A implements I, J
{
    abc()
    {

    }

    xyz():string
    {
        return "hello";
    }

    add(a,b,...c)
    {
        console.log("Result : ");
    }
}


let a1 = new A();
a1.add(11,22,33);
a1.add(11,22,33,4,5,6);
a1.add(11,22);