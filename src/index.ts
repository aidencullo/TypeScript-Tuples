// @ts-check

function average(arr: number[]) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(average([42, 100, 50, 6, 90]));
console.log(average(6));
console.log(average(["ten", "6", 10]));
