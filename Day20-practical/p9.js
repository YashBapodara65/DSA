// sorted rotate array in find the target element present in array

let arr = [4,5,6,7,0,1,2];
let target = 0;

function call(arr,target)
{
    let low = 0;
    let high = arr.length - 1;

    while(low <= high)
    {
        let mid = Math.floor((low+high)/2);

        if(target == arr[mid])
        {
            return mid;
        }

        if(arr[low] <= arr[mid])
        {
            if(target >= arr[low] && target < arr[mid])
            {
                high = mid - 1;
            }
            else
            {
                low = mid + 1;
            }
        }
        else if(arr[mid] <= arr[high])
        {
            if(target > arr[mid] && target <= arr[high])
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log(call(arr,target));
console.log(call(arr,3));