
var num=2;

 while(num<=9)
 { var i=1;
    var sum1=0,sum=0;
     while(i<=num)
     {
         sum1=sum1*10+num;
         sum=sum+sum1;;
         i++;

     }
     console.log(num+"->"+sum);
     num++;
 }
 
