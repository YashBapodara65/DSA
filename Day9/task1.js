let arr = [10,20,30,40,50];
let target = 30;

function call()
{

    for(let i=0; i<arr.length; i++)
    {
        if(target == arr[i])
        {
            return i;
        }
    }
    return -1;
}

console.log(call());