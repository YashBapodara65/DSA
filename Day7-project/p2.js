let input = [
    [1,2],
    [3,4]
];

let new_arr = [];

for(let row=0; row<input.length; row++)
{
    new_arr[row] = [];
    for(let col=0; col<input[row].length; col++)
    {
        if(row !== col)
        {
            new_arr[row][col] = input[col][row];
        }
        else
        {
            new_arr[row][col] = input[row][col];
        }
    }
}

console.log(new_arr);