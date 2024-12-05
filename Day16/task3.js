let arr = [1,1,2,3,3,3,4];

function uniqueArr(arr)
{
    let first = 0;
    let newArr = [];

    for(let i=1; i<arr.length; i++)
    {
        if(arr[first] != arr[i])
        {
            first++;
            arr[first] = arr[i];
        }
    }

    for(let x=0; x<=first; x++)
    {
        newArr.push(arr[x]);
    }

    console.log(newArr);
    return first+1;
}

console.log(uniqueArr(arr));