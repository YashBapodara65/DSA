function replaceArray(arr)
{

    let newArray = [];

    for(let row=0; row<arr.length; row++)
    {
        let store = [];
        for(let col=0; col<arr.length; col++)
        {
            if(arr[row][col] == 5)
            {
                store.push(50);
            }
            else
            {
                store.push(arr[row][col]);
            }
        }
        newArray.push(store);
    }

    console.log(newArray);

}

replaceArray([[1,2,3],[4,5,6],[7,8,9]]);