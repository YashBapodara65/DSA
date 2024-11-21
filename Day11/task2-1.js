let word = "hello";

function call(word)
{
    let str = word.split("");
    let left = 0;
    let right = str.length-1;
    while(left < right)
    {
        [str[left],str[right]] = [str[right],str[left]]; 
        left++;
        right--;
    }
    return str.join("");
}

console.log(call(word));
console.log(call("hello everyone...!"));