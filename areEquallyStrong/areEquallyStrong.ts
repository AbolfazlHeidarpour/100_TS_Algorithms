interface Arms {
  readonly right: number;
  readonly left: number;
}

function weakestArm(arms: Arms) {
  const { left, right } = arms;

  return left <= right ? left : right;
}

function strongestArm(arms: Arms) {
  const { left, right } = arms;

  return (left <= right ? left : right;
}

function getStrongAndWeakArms(arms: Arms): [number, number] {
  return [
    weakestArm(arms),
    strongestArm(arms)
  ];
}

function areEquallyStrong(you: Arms, friend: Arms) {
  const [yourWeakest, yourStrongest] = getStrongAndWeakArms(you);
  const [friendWeakest, friendStrongest] = getStrongAndWeakArms(friend);


  return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
}

console.log(areEquallyStrong({left: 10, right: 15}, {left: 15, right: 10}));
console.log(areEquallyStrong({left: 15, right: 10}, {left: 15, right: 10}));
console.log(areEquallyStrong({left: 15, right: 9}, {left: 15, right: 10}));