function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);
  const borderPicture = picture.map(p => '*'.concat(p, '*'));
  const newPicture = [wall, ...borderPicture, wall];

  return newPicture;
}

console.log(addBorder(['abc', 'ded']));