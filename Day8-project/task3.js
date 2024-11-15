let arr = [1,2,3,4,5];
// let arr = [5,3,1,4,2];
let check = [];
let flag = true;

for(let i=0; i<arr.length; i++)
{
    check[i] = arr[i];
}

for(let row=0; row<=arr.length-2; row++)
{
    let num = row;
    for(let col=row+1; col<arr.length; col++)
    {
        if(arr[num] > arr[col])
        {
            num = col;
        }
    }
    let temp = arr[num];
    arr[num] = arr[row];
    arr[row] = temp;
}

for(let i=0; i<arr.length; i++)
{
    if(arr[i] !== check[i])
    {
        flag = false;
        break;
    }
}

console.log(flag);