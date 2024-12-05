// sorted rotate array in find the target element present in array

function call(arr)
{
    let low = 0;
    let high = arr.length - 1;

    while(low < high)
    {
        let mid = Math.floor((low+high)/2);   

        if(arr[mid] > arr[high])
        {
            low = mid + 1;
        }
        else
        {
            high = mid;
        }
    }

    return arr[low];
}

console.log(call([4,5,6,1,2,3]));
console.log(call([1,2,3,4,5,6]));