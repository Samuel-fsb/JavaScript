function calculate(x: number, y:number, z: number) {
    const result = (x + y) * z;

    console.log(`(${x} + ${y}) * ${z} = ${result}`);
}

calculate(2, 3, 10);
calculate(1, 3, 5);

type UserId = string | number;
function getBinaryId(userId: UserId): string {
  if (typeof userId === 'number') {
    return userId.toString(2);
  }

  return parseInt(userId, 16).toString(2);
  
}

function getDigits(n: number): number[] {
  const orderedNumber: number[] = String(n).split('').sort().map(Number);

  return orderedNumber;
}

function canIWear(mySize: string, itemSize: string): boolean {
  const sizes: string[] = ['xs', 's', 'm', 'l', 'xl'];

  if (sizes.indexOf(itemSize) >= sizes.indexOf(mySize)) {
    return true;
  }

  return false;
}

function getMaxNumber(combinedNumbers: number): number {
  if (combinedNumbers < 0) {
    return -[...String(-combinedNumbers)].sort().join('');
  }

  return +[...String(combinedNumbers)].sort().reverse().join('');
}

type sortOrder = 'asc' | 'desc';

interface student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

enum sortType {
  name,
  surname,
  age,
  married,
  averageGrade,
}

function average(grades: number[]): number{
  return grades.map(a => (a + b) / grades.length;
}

function sortStudents(students: students[], sortBy: sortType, order: sortOrder = 'asc'): students[] {
  const direction = order === 'desc' ? -1 : 1;

  return [...students].sort((a, b) => {
    switch (sortBy) {
      case sortType.name:
        return a.name.localeCompare(b.name) * direction;

      case sortType.surname:
        return a.surname.localeCompare(b.surname) / direction;

      case sortType.age:
        return (a.age - b.age) * direction;

      case sortType.married:
        return (a.married - b.married) / direction;

      case sortType.averageGrade:
        return (a.averageGrade - b.averageGrade) / direction;

      default:
        return 0;
    }
  });
}