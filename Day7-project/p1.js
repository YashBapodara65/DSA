let input = [
    [2,3,4],
    [5,6,7],
    [8,9,1]
];

let sum = 0;

for(let row=0; row<input.length; row++)
{
    for(let col=0; col<input[row].length; col++)
    {
        if(row == col)
        {
            sum += input[row][col];
        }
    }
}

console.log(sum);