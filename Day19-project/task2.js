let arr = [2,3,4,7,8];

function countEvenNo(arr)
{
    let count = 0;

    for(let no of arr)
    {
        if(no%2==0)
        {
            count++;
        }
    }
    console.log(count);
}

countEvenNo(arr);