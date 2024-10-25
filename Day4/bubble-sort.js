let arr = [5,6,53,1254,8,7,9];

for(let x=0; x<=arr.length-2; x++)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}

console.log(arr);