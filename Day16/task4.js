let arr = [2,1,4,5,3];

function squareArr(newArr)
{
    let newSqaure = [];

    for(let i=0; i<newArr.length; i++)
    {
        newSqaure.push((newArr[i])*(newArr[i]));
    }

    return newSqaure;
}

console.log(squareArr(arr));;