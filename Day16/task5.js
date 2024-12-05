function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return -1;

}

console.log(binarySearch([2, 2, 3, 12, 12, 16, 19], 16));
console.log(binarySearch([2, 2, 3, 12, 12, 16, 19], 17));