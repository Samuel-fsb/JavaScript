function calculate(x: number, y:number, z: number) {
    const result = (x + y) * z;

    console.log(`(${x} + ${y}) * ${z} = ${result}`);
}

calculate(2, 3, 10);
calculate(1, 3, 5);

'use strict';

type UserId = string | number;
function getBinaryId(userId: UserId): string {
  if (typeof userId === 'number') {
    return userId.toString(2);
  }

  return parseInt(userId, 16).toString(2);
  
}