function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const n = 5;
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar));  // Output: 5000000015
