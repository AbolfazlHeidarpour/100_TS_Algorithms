function alphabetSubsequence(inputString: string): boolean {
  const charCodes: number[] = inputString.split('').map(char => char.charCodeAt(0));
  const isAscending = !charCodes.some((v, i, self) => i < self.length - 1 && v > self[i + 1]);
  const isDuplicated = new Set(charCodes).size !== charCodes.length;
  
  return !isDuplicated && isAscending;
}

console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
console.log(alphabetSubsequence('asdf'));
