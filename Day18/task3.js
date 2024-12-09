let char = "radar";

function isPalindrome(str)
{

    let stack = [];
    
    for(let char of str)
    {
        stack.push(char)
    }

    for(let i=0; i<str.length; i++)
    {
        if(str[i] != stack.pop())
        {
            return false
        }
    }

    return true;

}

console.log(isPalindrome(char));
console.log(isPalindrome("india"));
console.log(isPalindrome("mrowlatemymetalworm"));  // mr owl ate my metal worm. (sentence)