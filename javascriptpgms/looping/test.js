//var num=3,low=8,uper=25
//1**3=1 if in between print no
var num=2;
var low=8;
var upper=25;
for(let i=1;i<upper;i++)
{
temp=i**num;
if((temp>=low)&(temp<=upper))
{
    console.log(temp);
}
}
