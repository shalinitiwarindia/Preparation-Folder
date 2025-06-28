function evenIndexAndEvenValue(arr) {
  return arr.filter((num, index) => index % 2 === 0 && num % 2 === 0);
}


const input = [2, 4, 5, 3, 6, 8];
const output = evenIndexAndEvenValue(input);

console.log(output);
