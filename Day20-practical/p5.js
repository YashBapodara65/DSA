function reverseString(str)
{
    let stack = [];

    for(let char of str)
    {
        stack.push(char);
    }

    let newStr = "";

    while(stack.length > 0)
    {
        newStr += stack.pop();
    }

    console.log(newStr);

}

reverseString("hello");