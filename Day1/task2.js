// find the maximum element from the array
let maxNum = 0;

function check(arr)
{
    maxNum = arr[0];
    for(let i=0; i<arr.length; i++)
    {
        if(maxNum < arr[i])
        {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

check([-2,-3,5,-4]);
check([-20,-13,-15,-40]);