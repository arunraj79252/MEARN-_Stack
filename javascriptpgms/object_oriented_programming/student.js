class Student{
    static getCollege()
    {
return "luminar";
    } 
constructor(rolno,name,course)
{
    this.rolno=rolno;
    this.name=name;
    this.course=course;


}
printStudent()
{
    console.log(this.rolno+","+this.name+","+this.course+","+Student.getCollege());
}

}
var stud=new Student(101,"amal","meanstack");
stud.printStudent();