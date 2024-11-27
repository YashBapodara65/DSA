function diagonalArray(arr)
{

    let newArray = [];

    for(let row=0; row<arr.length; row++)
    {
        let store = [];
        for(let col=0; col<arr.length; col++)
        {
            if(row == col)
            {
                store.push(0);
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

diagonalArray([[5,1,2,3],[4,6,7,8],[9,10,11,12],[13,14,15,16]]);