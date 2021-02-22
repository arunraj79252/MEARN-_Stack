class Employee{

    constructor(id,name,desig,sal)
    {
        this.id=id;
       this.name=name;
        this.desig=desig;
        this.sal=sal;


    }
}
var obj1=new Employee(100,"ram","developer",25000);
var obj2=new Employee(101,"raj","developer",22000);
var obj3=new Employee(102,"ajay","qa",28000);
var obj4=new Employee(103,"abab","qa",20000);
var employee=[];
employee.push(obj1);
employee.push(obj2);
employee.push(obj3);
employee.push(obj4);
employee.map(emp=>emp["name"].toUpperCase()).forEach(emp=>console.log(emp))
// for (let emp of employee)
// {
//     if(emp.desig=="developer")
// {
//     console.log(emp);
// }


// }
//  var maxsal=employee.reduce((emp1,emp2)=>emp1.sal>emp2.sal?emp1.sal:emp2.sal);
//  console.log("highest salary is"+maxsal);
//  var enames=employee.map(emp=>emp.name.toUppercase());
// console.log(enames);
// var devops=employee.filter(emp=>emp.name=="developer");
// console.log(devops);
// //sorting
// employee.sort((o1,o2)=>o1.sal>o2.sal?-1:1).forEach(emp=>console.log(emp));