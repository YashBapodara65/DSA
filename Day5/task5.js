let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let new_arr = [];

for(let row=0; row<arr.length; row++)
{
    new_arr[row] = [];
    for(let col=0; col<arr[row].length; col++)
    {
        new_arr[row][col] = arr[col][row];
    }
}

console.log(new_arr);