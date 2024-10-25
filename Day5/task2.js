let arr = [
    [1,2,3,4,5,6],
    [7,8,6,4],
    [4,2,7,1,9]
];

for(let row=0; row<arr.length; row++)
{
    let data = "";
    for(let col=0; col<arr[row].length; col++)
    {
        if(arr[row].length-1 == col)
        {
            data += arr[row][col];
        }
        else
        {
            data += arr[row][col] +",";
        }
    }
    console.log(data);
}