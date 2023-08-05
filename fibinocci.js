var a=1,b=1,c,n=10;
var i=1;
while(i<n-1)
{
	c=a+b;
	a=b;
	b=c;
	i++;
}
document.write(c)