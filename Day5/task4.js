let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let row=0; row<arr.length; row++)
{
    for(let col=0; col<arr[row].length; col++)
    {
        arr[row][col] += 1;
    }
    console.log(arr[row]);
}