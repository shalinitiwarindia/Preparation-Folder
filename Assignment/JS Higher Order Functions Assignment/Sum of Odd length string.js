function sumOfOddLengthStrings(arr) {
  return arr.reduce((sum, str) => {
    if (str.length % 2 !== 0) {
      return sum + str.length;
    }
    return sum;
  }, 0);
}


