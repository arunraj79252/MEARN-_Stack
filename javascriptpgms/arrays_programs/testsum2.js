var arr=[1,2,3,4];
var sum=0;
var res=[];
for(let num of arr)
{
    sum=sum+num;
   
}
for(let j of arr)
{
    res.push(sum-j);
}
console.log(res);