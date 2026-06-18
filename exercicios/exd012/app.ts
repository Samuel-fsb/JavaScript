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


type SortOrder = 'asc' | 'desc';

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

function average(grades: number[]): number{
  return grades.reduce((sum: number, grade: number) => sum + grade, 0) / grades.length;
}

function sortStudents(students: Student[], sortBy: SortType, order: SortOrder = 'asc'): Student[] {
  const direction: number = order === 'desc' ? -1 : 1;

  return [...students].sort((a: Student, b:Student) => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name) * direction;

      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * direction;

      case SortType.Age:
        return (a.age - b.age) * direction;

      case SortType.Married:
        return (+a.married - +b.married) * direction;

      case SortType.AverageGrade:
        return (average(a.grades) - average(b.grades)) * direction;

      default:
        return 0;
    }
  });
}

type Topping = 'cheese' | 'peppers' | 'salami' | 'pepperoni' | 'mushrooms' | 'olives';

interface Order {
  name: string,
  toppings: Topping[],
}

class Pizza {
  createdOn: Date = new Date();
  constructor(public name: string,  public toppings: Topping[],) {
  } 
}

class PizzaMaker {
  static create(order: Order): Pizza {
    const { name, toppings } = order;
    return new Pizza(name, toppings);
  }
}
