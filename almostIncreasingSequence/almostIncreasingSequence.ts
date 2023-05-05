function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  sequence.forEach((value, i, self) => {
    if (value <= self[i - 1]) {
      count++;

      if (value <= self[i - 2] && self[i + 1] <= self[i - 1])
        return false;
    }
  });

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 12, 1]));
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([-3, 5, 1, 0]))