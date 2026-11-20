//first :
let s="Hello World"
let l=s.slice(6,11)
console.log("The last word in the string is ",l)
console.log(l.length) 

//second:
let m =" fly me  to  the moon"
let a=m.slice(17,21)
console.log("The last word in the string is ",a)
console.log(a.length)  

//Third:string anagram
function checkAnagram(str1,str2)
{
    
    
    let a = str1.split("").sort().join("")
    let b = str2.split("").sort().join("")
    console.log(a)
    console.log(b)

    if(a==b)
    {
        console.log("Anagram")
    }
    else
    {
        console.log("Not anagram")
    }
}

    checkAnagram("hello", "world")
    checkAnagram("listen", "silent")
