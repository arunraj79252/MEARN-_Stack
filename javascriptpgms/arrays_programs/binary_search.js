var arr=[114,25,6,11111,2,3];
arr.sort((no1,no2)=>no1-no2);//no1>no2?-1:+1;->common case, other one is special case of number.
console.log("sorted array \n"+arr);
var low=0;
var upper=arr.length-1;
var element=25;
var flag=0;
while(low<=upper)
{
let mid=Math.floor((low+upper)/2)
if(arr[mid]<element)
{
    low=mid+1;
}
else if(arr[mid]>element)
{
    upper=mid-1;
}
else{
    flag++;
    break;
}
}
if(flag==0)
{
    console.log("element not found");

}
else
{
    console.log("element found");
}
