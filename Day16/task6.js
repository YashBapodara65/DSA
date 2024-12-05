function findFirstAndLastPosition(nums, target) {
    function binarySearch(isFirst) {
        let left = 0, right = nums.length - 1, result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                // Narrow search space for first or last position
                if (isFirst) {
                    right = mid - 1; // Search left half for the first position
                } else {
                    left = mid + 1; // Search right half for the last position
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const first = binarySearch(true);
    const last = binarySearch(false);
    return [first, last];
}

// Example usage
const nums = [5, 7, 7, 8, 8, 8, 10];
const target = 8;
console.log(findFirstAndLastPosition(nums, target)); // Output: [3, 5]
