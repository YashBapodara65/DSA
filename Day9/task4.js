let arr = [1,2,3,2,4];

function call(data,target)
{
    let newArr = [];

    data.forEach((el,i)=>{
        if(target == el)
        {
            newArr.push(i);
        }
    })

    if(newArr == "")
    {
        return -1;
    }
    else
    {
        return newArr[newArr.length-1];
    }


}

console.log(call(arr,2));
console.log(call(arr,5));