let arr = [1, 1, 2, 3, 3, 4];

function call(data) {
    let newArr = [... new Set(data)];
    console.log(newArr);
}

call(arr);