let arr = [1,2,2,3,4,2];
let countNum = 0;

function count(data,target)
{
    data.forEach((el,i)=>{
        if(target == el)
        {
            countNum++;
        }
    });

    return countNum;
}

console.log(count(arr,2));