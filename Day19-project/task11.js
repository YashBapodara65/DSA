let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

function findIntersection(a1,a2)
{
    let newSet = new Set(a1);
    let newArr = [];

    for(let el of a2)
    {
        if(newSet.has(el))
        {
            newArr.push(el);
        }
    }
    console.log(newArr);
}

findIntersection(arr1,arr2);