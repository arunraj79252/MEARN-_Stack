class Parent
{
    bike()
    {
        console.log("has a bike");
    }
}
class Child extends Parent//using the keyword "extends"
{

}
var ch=new Child();
ch.bike();
var pt=new Parent();
pt.bike();