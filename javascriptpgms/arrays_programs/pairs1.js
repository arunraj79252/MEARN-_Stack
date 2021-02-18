var arr=[1,2,3,4,5,6];
var low=0;
var num=6;
var upper=arr.length-1;
while(low<upper)
{
    let total=arr[low]+arr[upper];
    if(total==num)
    {
        console.log(arr[low],arr[upper]);
        //  break;
        upper--;
    }
    else if(total<num)
    {
        low++;
    }
    else{
        upper--;
    }
}
