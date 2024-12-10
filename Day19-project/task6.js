let str = "hello world";

function vowelCheck(str)
{
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }
    console.log(count);
}

vowelCheck(str);