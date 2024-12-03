function call(num)
{
    if(num == 0)
    {
        return 1;
    }
    return num * call(num-1);
}

console.log(call(5));