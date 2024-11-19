let str = "hello";
let ans = "";

function call(str)
{
    for(let i=str.length-1; i>=0; i--)
    {
        ans += str[i];
    }
    return ans;
}

console.log(call(str));