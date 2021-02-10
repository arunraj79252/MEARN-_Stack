var num=7;//prime
 var flag=0;
 for(let i=2;i<=Math.sqrt(num);i++)
 {
     if((num%i)==0)
     {
         flag=1;
         break;
     }

 }
 if(flag==1)
 {
     console.log(" not prime number");
 }
 else{
     console.log("prime")
 }