function transposeArray(arr)
{

    let newArray = [];

    for(let row=0; row<arr.length; row++)
    {
        let store = [];
        for(let col=0; col<arr.length; col++)
        {
            store.push(arr[col][row]);
        }
        newArray.push(store);
    }

    console.log(newArray);

}

transposeArray([[1,2,3],[4,5,6],[7,8,9]]);