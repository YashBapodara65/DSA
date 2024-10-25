let input = [5,6,8,7,4,6,3,9,2,1];

for(let row=0; row<=input.length-2; row++)
{
    for(let col=0; col<input.length; col++)
    {
        if(input[col][row])
        if(input[col] > input[col+1])
        {
            let temp = input[col];
            input[col] = input[col+1];
            input[col+1] = temp; 
        }
    }
}

console.log(input);