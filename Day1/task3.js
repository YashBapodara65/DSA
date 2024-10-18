// Reverse the array

function reverseArray(arr)
{
    let d = [];

    for(let i=arr.length-1; i>=0; i--)
    {
        d.push(arr[i]);
    }
    console.log(d);
}

reverseArray([12,4,23,8,10]);
reverseArray([1,2,3,4,5]);