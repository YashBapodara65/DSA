function sorting(arr)
{
    for(let row=0; row<=arr.length-2; row++)
    {
        let min = row;
        for(let col= row+1; col<arr.length; col++)  
        {
            if(arr[min] > arr[col])
            {
                min = col;
            }
        }
        let temp = arr[min];
        arr[min] = arr[row];
        arr[row] = temp;
    }

    console.log(arr);

}

sorting([29,10,14,37,13]);