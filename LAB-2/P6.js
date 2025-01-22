n=2
sum=0
for(i=1;i<n;i++)
{
    if(n%i==0)
    {
        sum=sum+i
    }

}
if(n==sum)
{
    console.log(n,"is perfect Number")
}
else
{
    console.log(n,"is not perfect Number")

}