function call(n)
{

    if(n == 0)
    {
        return 0;
    }

    return n + call(n-1);

}

console.log(call(5));
console.log(call(8));