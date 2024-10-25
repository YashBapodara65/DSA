function selection_sort(arr) {

    for (let row = 0; row <= arr.length - 2; row++) {
        let min = row;
        for (let col = row + 1; col < arr.length; col++) {
            if (arr[min] < arr[col]) {
                min = col;
            }
        }
        let temp = arr[min];
        arr[min] = arr[row];
        arr[row] = temp;
    }

    console.log(arr);

}

selection_sort([10, 4, 34, 120, 45, 230, 29]);
selection_sort([29, 4, 244, 120, 245, 230, 29]);