class Bank
{
constructor(accno,pname,bal)
{
    this.accnno=accno;
    this.pname=pname;
    this.bal=bal;

}
deposite(amount)
{

    this.bal+=amount;
    console.log("account credited with amount "+amount+"/n avilable balance is "+this.bal);
}
withdraw(amount)
{
    if(amount>this.bal)
    {
        console.log("insufficient fund");
    }
    else{
    this.bal-=amount;
    console.log("account debited with amount "+amount+"\n available balance is "+this.bal);
    }
}
balanceEnq()
{
    console.log("current balance is\n"+this.bal);

}
}
var ob=new Bank(101,"arun",1000);
ob.deposite(1000);
ob.withdraw(500);
ob.balanceEnq();