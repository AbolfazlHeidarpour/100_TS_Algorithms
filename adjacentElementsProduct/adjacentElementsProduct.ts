function adjacentElementsProduct(inputArray: number[]): number {
  let largetsProduct = 0;

  inputArray.forEach((v, i, self) => {
    if (i < self.length - 1) {
      const product = v * self[i + 1];
      largetsProduct = largetsProduct < product ? product : largetsProduct;
    }
  });

  return largetsProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 0, 8, 4]));