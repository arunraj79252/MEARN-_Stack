function add(num1,num2)
{
    return num1+num2;
}
//arrow functions are anonimous functions
var add=(num1,num2)=>num1+num2;
console.log(add(10,20));
//map
var ar=[1,2,3,4,5];
ar.forEach(o=>console.log(o));//forEach
var sqr=(num1)=>num1**2;
var data=ar.map(sqr);
console.log(data);
var data1=ar.filter(num=>num==0)//filter
console.log(data1);
var sum=ar.reduce((num1,num2)=>num1+num2);
console.log(sum);//reduce
var max=ar.reduce((num1,num2)=>num1>num2? num1:num2);//ternory operator