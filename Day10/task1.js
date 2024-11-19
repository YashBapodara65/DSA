let arr = [1, 2, 3, 5, 4, 9, 6];
let newArr = [];
let target = 6;

function call(arr) {
    for (let row = 0; row <= arr.length - 2; row++) {
        let subarr = [];
        for (let col = row + 1; col < arr.length; col++) {
            if ((arr[row] + arr[col]) == 6) {
                subarr.push(row);
                subarr.push(col);
                newArr.push(subarr);
            }
        }
    }
    return newArr;
}

console.log(call(arr));