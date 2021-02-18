var arr1=[10,11,13,14,15];
var arr2=[8,9,10,11,16];
var count=0;
for(let i of arr1)
{
    for(let j of arr2)
    { count++;
        if(i==j)
        {
            console.log(i);
        }
    }
}
console.log(count);

