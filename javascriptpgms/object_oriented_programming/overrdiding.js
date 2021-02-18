class Parent{
    phone()
    {
        console.log("have a nokia phone");
    }
}
class Child extends Parent{

    phone()
    {    
        super.phone(); //to invoke Parent methods
        console.log("i phone");
    }
}
var obj=new Child();
obj.phone();

