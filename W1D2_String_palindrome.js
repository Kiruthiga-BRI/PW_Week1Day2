
function palindrome(input)
{
input="dad"
i=input.split("")
console.log(i)
let reverse="";
for(x=i.length-1;x>=0;x--)
{
    reverse=reverse+i[x]
   
}
console.log(reverse)

if(input===reverse)
{
    console.log("Palindrome")
}
else
{
    console.log("Not a palindrome")
}
}
palindrome()