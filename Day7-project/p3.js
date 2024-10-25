let input = [
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

let target = 6;
let flag = false;

for(let row=0; row<input.length; row++)
{
    for(let col=0; col<input[row].length; col++)
    {
        if(input[row][col] == target)
        {
            flag = true;
        }
    }
}

if(flag)
{
    console.log("true");
}
else
{
    console.log("false");
}