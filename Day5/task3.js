let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let sum = 0;

for(let row=0; row<arr.length; row++)
{
    for(let col=0; col<arr[row].length; col++)
    {
        sum += arr[row][col];
    }
    console.log(arr[row]);
}

console.log(sum);