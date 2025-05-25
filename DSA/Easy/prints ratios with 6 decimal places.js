function plusMinus(arr) {
    let n = arr.length;
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    for (let num of arr) {
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
    }

    console.log((positives / n).toFixed(6));
    console.log((negatives / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
}

// Example usage:
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
