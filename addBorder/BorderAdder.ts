class BorderAdder {
  constructor(
    private _charArray: string[], 
    private _wall: string = ''
  ) {
    this._wall = this._CreateWall();
  }

  private _CreateWall() {
    return '*'.repeat(this._charArray[0].length + 2);
  }
  
  private _AddWallToChars() {
    return this._charArray.map(this._AddWallToChar);
  }

  private _AddWallToChar(char: string) {
    return '*'.concat(char, '*');
  }

  private _AddWalls(chars: string[]) {
    return [this._wall, ...chars, this._wall];
  }

  AddBorder() {
    const borderedChars = this._AddWallToChars();
    return this._AddWalls(borderedChars);
  }
}

const borderAdder = new BorderAdder(['abc', 'ded']);

console.log(borderAdder.AddBorder());