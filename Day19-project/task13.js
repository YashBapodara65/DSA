let str = "[{{{}}}]";

function balancedParanthesis(str)
{

    let stack = [];

    for(let i=0; i<str.length; i++)
    {
        if(["(","{","["].includes(str[i]))
        {
            stack.push(str[i]);
        }
        else
        {
            let a = stack.pop();
            if((a != "(" && str[i] == ")") || (a != "{" && str[i] == "}") || (a != "[" && str[i] == "]"))
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

console.log(balancedParanthesis(str));