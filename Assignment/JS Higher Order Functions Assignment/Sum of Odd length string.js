function sumOfOddLengthStrings(arr) {
  return arr.reduce((sum, str) => {
    if (str.length % 2 !== 0) {
      return sum + str.length;
    }
    return sum;
  }, 0);
}

// Sample Input
const input = ["A", "Good", "Problem"];
const output = sumOfOddLengthStrings(input);

console.log(output); // 8
