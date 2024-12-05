let arr = [0,2,1,0,2,1,0,4,0,0,2];

function zeroEle(arr)
{
    for(let i=0; i<=arr.length-2; i++)
    {
        let min = i;
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[min] < arr[j])
            {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    console.log(arr);

}

zeroEle(arr);