function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

// Example usage:
const n = 6;
const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar));  // Output: 31
