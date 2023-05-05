function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.forEach((v, i) => i % 2 === 0 ? evenSum += v : oddSum += v);

  return [evenSum, oddSum];
}

console.log(alternatingSums([1, 34, 21, 43, 3, 5]));