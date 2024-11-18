let arr = [3,7,1,5,9,0,2];
let min = +Infinity;
let max = -Infinity;

function maxNumber(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
        }
    }
    
    return max;    
}

function minNumber(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(min > arr[i])
        {
            min = arr[i];
        }
    }
    
    return min;    
}

function call(arr)
{
    console.log("Maximum : " +maxNumber(arr) +", Minimum : " +minNumber(arr));
}

call(arr);