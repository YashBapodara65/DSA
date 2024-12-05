function countOccurrences(arr)
{
    let mySet = new Map();
    for(let val of arr)
    {
        if(mySet.has(val))
        {
            mySet.set(val,mySet.get(val) + 1);
        }
        else
        {
            mySet.set(val,1);
        }
    }

    console.log(mySet);

}

countOccurrences([1,2,2,3,3,3]);
countOccurrences([1,2,2,3,3,3,4,5,5]);