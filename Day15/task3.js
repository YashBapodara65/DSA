function findUnion(arr1,arr2)
{

    let mySet = new Set(arr1);

    for(let val of arr1)
    {
        if(mySet.has(val) == false)
        {
            mySet.add(val);
        }
    }   

    for(let val of arr2)
    {
        if(mySet.has(val) == false)
        {
            mySet.add(val);
        }
    }

    console.log(mySet);

}

findUnion([1,2,3],[3,4,5]);