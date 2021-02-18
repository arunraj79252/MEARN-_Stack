//method overloading
class Maths
{
    add(num)
    {
        console.log("inside single arg");
    }
    add(num1,num2)
    {
        var sum=num1+num2;
        console.log(sum);
    }
    add(num1,num2,num3)
    {
        var sum=num1+num2+num3;
        console.log(sum);
    }
}
var math=new Maths();
math.add(2,3);
math.add(2,3,4);
//in javascript method overloading 


