var num=123;
var temp=num;
var sum=0;
var rem;
while(temp !=0)
{
    rem=temp%10;
    sum=(sum*10)+rem;
    temp=Math.floor(temp/10);
}
console.log(sum);