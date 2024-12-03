let arr = [1,1,2,2,3,4,4,5];

function call(arr)
{
    let count = 0;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[count] != arr[i])
        {
            count++;
            arr[count] = arr[i];
        }
    }
    // console.log(arr);

    // count++;
    // console.log(count);
    
    let newArr = [];
    for(let i=0; i<count; i++)
    {
        newArr.push(arr[i]);
    }

    // console.log(newArr);

    return count+1;

}

console.log(call(arr));;