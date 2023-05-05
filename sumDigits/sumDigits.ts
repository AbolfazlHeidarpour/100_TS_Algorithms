function sumDigits(num: number): number {
  const nums = num.toString().split('');
  const sum = nums.reduce((a: string, b: string) => 
    (parseInt(a) + parseInt(b)).toString()
  );

  return parseInt(sum);
}

console.log(sumDigits(298123));