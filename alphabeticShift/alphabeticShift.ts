function alphabeticShift(inputString: string): string {
  const alphabets: string = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedInput = inputString.split('').map((val) => {
    let index = 0;

    if (val !== 'z')
      index = alphabets.search(val) + 1;
    
    return alphabets[index];
  });

  return shiftedInput.join('');
}

console.log(alphabeticShift('crazy'));