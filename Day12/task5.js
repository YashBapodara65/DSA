function arrSum(arr,n)
{

    if(n == 0)
    {
        return 0;
    }

    return arr[n-1] + arrSum(arr,n-1);

}

console.log(arrSum([1,2,3,4,5],5));