function isEven(value: number): boolean {
  return value % 2 === 0;
}

function absoluteValuesSumMinimization(a: number[]): number {
  const { length } = a;

  if (isEven(length))
    return a[length / 2 - 1];
  else return a[Math.floor(length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([7, 1, 2]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 1, 1]));