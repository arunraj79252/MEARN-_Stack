var arr=[9,10,15,7];
var res=[];
for(let i=0;i<arr.length;i++)
{ var sum=0;
    for(let j=0;j<arr.length;j++)
    {
        if(j==i)
        {
            continue;
        }
        else
        {
        sum=sum+arr[j];
        }
    }
    res.push(sum);

}
console.log(res);