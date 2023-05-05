function add(a: number, b: number) {
  return a + b;
}

function multiAdd(...values: number[]): number {
  let sum = 0;

  values.forEach(v => {
    sum += v;   
  });

  return sum;
}

console.log(add(12, -3));
console.log(multiAdd(1, 2, 12, -3, 9))