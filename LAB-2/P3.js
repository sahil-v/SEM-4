let n=50;
let sum=0;
for(let i=0;i<=n;i++)
{   
    if(i%2==0)
    {
        sum=sum-i;
    }
    if(i%2!=0)
    {
        sum=sum+i
    }
    
}
console.log(sum)
