function getUnique(arr)
{
    mySet = new Set(arr);

    myArr = [];

    for(let val of mySet)
    {
        myArr.push(val);
    }

    console.log(myArr);
}

getUnique([1,2,2,3,4,4,5]);