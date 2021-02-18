class Parent{
    m1()
{
    console.log("inside parent m1 method");
}
}
class Child extends Parent{
    m2()
    {
        console.log("method inside child m2");
    }
}
class subChild extends Child{

    m3()
    {
        console.log("method inside subchild");
    }
}
var sb=new subChild();
sb.m3();
sb.m2();
sb.m1();
//js does not support multiple inheritance 