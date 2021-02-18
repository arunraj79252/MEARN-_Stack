var emp=
{
    id:100,
    name:"arun",
    desig:"manager",
    salary:25000

};
console.log(emp.salary);
if("gender" in emp)//if a key exist 
{
    console.log("Exist");
}
else
{
    console.log("Not exist");
    emp["gender"]="male";
}
console.log(emp);