let word = "hello";

function call(word)
{
    let str = word.split("");
    let left = 0;
    let right = str.length-1;
    while(left < right)
    {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str.join("");
}

console.log(call(word));
console.log(call("hello everyone...!"));