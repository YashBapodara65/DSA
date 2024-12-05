let arr = [1,2,4,5,6];
let target = 6;

function pairSum(arr,target)
{
    let left = 0;
    let right = arr.length-1;

    while(left <= right)
    {
        let sum = arr[left] + arr[right];

        if(sum == target)
        {
            return [left,right];
        }

        if(sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return -1;
}

console.log(pairSum(arr,target));
console.log(pairSum([1,3,3,5],5));