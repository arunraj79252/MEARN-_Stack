var num1=10;
var num2=20;
var num3=30;
var largest;
var second;
var sum=num1+num2+num3;
if((num1>num2)&(num1>num3))

{
    largest=num1;
    if(num2>num3)
    { second=num2;}
    else{
        second=num3;
    }

}
else if((num2>num1)&(num2>num3))
{
    largest=num2;
    if(num1>num3)
    {
        second=num1;
    }
    else{ second=num3;}
}
else if((num3>num1)&(num3>num2)){
    largest=num3;
    if(num1>num2)
    {
        second=num1;
    }
    else{
        second=num2;
    }
}

console.log("Largest= "+largest);
console.log("second largest= "+second);
var smallest=sum-(largest+second);
console.log("smallest= "+smallest);
console.log("sorted order= "+smallest+","+second+","+largest);