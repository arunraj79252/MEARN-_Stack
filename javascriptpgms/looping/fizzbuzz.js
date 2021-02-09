var i=1;
var flag=0;
while(i<=100)
{
    if(i%3==0)
    {
        console.log("fizz");
        flag=1;
    }
     if(i%5==0)
    {
        console.log("buzz");
        flag=1;
    }
      if(i%15==0)
     {
         console.log("fizzbuzz");
         flag=1;
     }
 i++;    
}
if(flag==0)
{
    console.log(i);
}