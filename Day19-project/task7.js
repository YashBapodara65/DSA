let str = "hello";

function reverseString(str)
{
    let newStr = "";
    for(let i=str.length-1; i>=0; i--)
    {
        newStr += str[i];
    }
    console.log(newStr);
}

reverseString(str);