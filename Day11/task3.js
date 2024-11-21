let arr = [1,1,2,3,3,3,4];

function call(arr)
{
    let newArr = [];
    let i = 0;
    for(let j=1; j<arr.length; j++)
    {
        if(arr[i] != arr[j])
        {
            i++;
            arr[i] = arr[j];
        }
    }

    for(let x=0; x<=i; x++)
    {
        newArr.push(arr[x]);
    }
    console.log(newArr);
    return i+1;
}

console.log(call(arr));