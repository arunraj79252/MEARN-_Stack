//class
//object
//reference
class person
{
    constructor(name,age,gender)
    {
    this.name=name;
    this.age=age;
    this.gender=gender;
    }
    printPerson()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}
var obj=new person("ram",25,"male");
obj.printPerson();
//constructer name is always as "constructor"