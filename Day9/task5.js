let arr = [4,7,1,9];

function call(data,target)
{
    for(let i=0; i<data.length; i++)
    {
        if(target == data[i])
        {
            return true;
        }
    }
    
    return false;

}

console.log(call(arr,5));
console.log(call(arr,1));