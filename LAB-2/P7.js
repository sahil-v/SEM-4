n=10
flag=0
for(i=1;i<=n;i++)
{
    if(n%i==0)
    {
        flag ++
    }

}
if(flag==2)
{
    console.log(n,"is Prime number")
}
else
{
    console.log(n,"is Not Prime number")

}