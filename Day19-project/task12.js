let arr = [4, 5, 2, 25]
let newArr = new Array(arr.length).fill(-1);
let stack = [];


for(let i=0; i<arr.length; i++)
{
    while(stack.length > 0 && arr[stack[stack.length-1]] < arr[i])
    {
        let a=stack.pop();
        newArr[a]=arr[i];
    }
    stack.push(i)
}
console.log(newArr);