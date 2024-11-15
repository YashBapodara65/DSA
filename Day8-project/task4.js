let arr = [5,3,1,4,2,3];

for(let row=0; row<=arr.length-2; row++)
{
    let num = row;
    for(let col=row; col<arr.length; col++)
    {
        if(arr[num] > arr[col])
        {
            num = col;
        }
    }
    let temp = arr[num];
    arr[num] = arr[row];
    arr[row] = temp;
}

console.log(arr);