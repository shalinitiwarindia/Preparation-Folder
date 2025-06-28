
let input = prompt("Enter words separated by comma:");
let arr = input.split(",").map(str => str.trim());

let result = arr.filter((str) => {
  return str[0] === 'a' || str[str.length - 1] === 'a';
});

console.log(result);
alert("Filtered words: " + result.join(", "));
