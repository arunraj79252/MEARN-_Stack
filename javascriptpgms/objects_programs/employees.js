var employees=[

    {id:100,name:"ram",desig:"developer",join:1989,resign:2005},
    {id:101,name:"raju",desig:"developer",join:1990,resign:2005},
    {id:103,name:"ravi",desig:"hr",join:1991,resign:2000},
    {id:104,name:"amit",desig:"mrkt",join:1995,resign:2005},
    
]
//find all employees whose desig is developer
//find all employees who worked in 1990's
//find employees with exp>10
console.log("employees as developers\n");
for(let emp of employees)
{
if(emp["desig"]=="developer")
{
    console.log(emp["name"]);
}
}
console.log("employees joined in 1990's are\n");
for(let emp in employees)
{
if((emp["join"]>=1990)&(emp["join"]<=2000))
{
    console.log(emp["name"]);
}
}
console.log("employees who have exp greater than 10\n");
for(let emp of employees)
{
    
if((emp["resign"]-emp["join"])>10)
{
    console.log(emp["name"]);
}

} 
