let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

function rowSum(arr)
{
    for(let row=0; row<arr.length; row++)
        {
        let sum_row = 0;
        for(let col=0; col<arr[row].length; col++)
        {
            sum_row += arr[row][col];
        }
        console.log(sum_row);
    }
}

rowSum(arr);