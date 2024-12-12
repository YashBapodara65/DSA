let str = "({[]})";
let stack = [];
let obj = {")" : "(", "}" : "{", "]" : "["};

function parenthesesBalanced(str)
{
    for(let i=0; i<str.length; i++)
    {
        if(str[i] == "(" || str[i] == "{" || str[i] == "[")
        {
            stack.push(str[i]);
        }
        else
        {
            if(stack.pop() != obj[str[i]])
            {
                return false;
            }
        }
    }

    if(stack.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

console.log(parenthesesBalanced(str));
console.log(parenthesesBalanced("([)]"));