let arr = [1,2,3,4,7];
let target = 6;

function call(a,tar)
{
    let left = 0;
    let right = a.length-1;

    while(left <= right)
    {
        let sum = a[left] + a[right];
        if(sum == tar)
        {
            return [left,right];
        }
        else if(sum < tar)
        {
            left++;
        }
        else if(sum > tar)
        {
            right--;
        }
    }
}

console.log(call(arr,target));