function call(n)
{

    if(n == 0)
    {
        return;
    }

    call(n-1);

    console.log(n);
}

call(5);
call(8);