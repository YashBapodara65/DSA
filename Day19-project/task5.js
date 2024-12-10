let arr = [1,2,3,4,5,6];
let target = 4;

function checkTarget(arr,target)
{
    for(let no of arr)
    {
        if(no == target)
        {
            return true;
        }
    }
    return false;
}

console.log(checkTarget(arr,target));