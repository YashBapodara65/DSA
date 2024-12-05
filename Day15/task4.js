function findIntersection(arr1,arr2)
{

    let mySet = new Set(arr1);
    let newArr = [];

    for(let val of arr2)
    {
        if(mySet.has(val))
        {
            // mySet.add(val);
            newArr.push(val);
        }
    }

    console.log(newArr);

}

findIntersection([1,2,3,4],[3,4,5,6]);
findIntersection([1,2,3,4,5],[3,4,5,6]);
findIntersection([1,2,3],[3,4,5,6,7]);