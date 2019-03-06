interface I
{
    abc():void;
}

interface J
{
    xyz():string;
}

class B implements I, J
{
    abc()
    {

    }

    xyz():string
    {
        return "hello";
    }
}