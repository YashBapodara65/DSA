
function check(arr)
{
    let output = [];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] != 0)
        {
            output.push(arr[i]);
        }
    }
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == 0)
        {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(check([1,0,0,1,1,1,0,0,1]));
console.log(check([0,1,0,1,0,0,1]));
console.log(check([2,1,3,1,3,2,1]));