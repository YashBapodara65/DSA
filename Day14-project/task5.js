function sumOfDigit(num)
{
    let sum = 0;
    
    while(num!=0)
    {
        let first = num % 10;
        num = Math.floor(num / 10);
        sum += first;
    }

    console.log(sum);
}

sumOfDigit(123);
sumOfDigit(485);