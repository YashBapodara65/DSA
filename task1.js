// we have one array and one target we have to find that target. If target present than we have to return its index else -1.

function check(tar,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == tar) {
            return i;
        }
    }

    return -1;
}

console.log(check(3,[1,2,3,4,5,6,7]));
console.log(check(6,[1,2,3,4,5,6,7]));
console.log(check(9,[1,2,3,4,5,6,7]));