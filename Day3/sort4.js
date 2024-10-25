let arr = [1,0,0,1,1,1,0,0,1];

for(let row=0; row<=arr.length-2; row++)
{
    let min = row;
    for(let col=row+1; col<arr.length; col++)
    {
        if(arr[min] < arr[col])
        {
            min = col;
        }
    }
    let temp = arr[min];
    arr[min] = arr[row];
    arr[row] = temp;
}

console.log(arr);