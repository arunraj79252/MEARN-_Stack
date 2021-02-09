var num1=153;
var temp=num1;
var sum=0;
var rem;
while(temp!=0)
{
rem=temp%10;
temp=Math.floor(temp/10);
sum=sum+rem**3;

}
console.log("sum of dgits cubes of "+num1+"= "+sum);

if(num1==sum)
{
    console.log(num1+" is a armstrong number");
}
else{
console.log("Not an armstrong number");
}