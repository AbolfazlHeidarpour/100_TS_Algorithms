function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;

  inputArray.forEach(word => {
    const { length } = word;
    longestLength = longestLength < length ? length : longestLength;
  });

  return inputArray.filter(w => w.length === longestLength);
}

console.log(allLongestStrings(['aab', '', 'aa', 'avd', 'owe']));