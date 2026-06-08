class BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    this.name = name;
    this.weight = weight;
    this.chipVersion = chipVersion;
    this.coords = {
      x: coords.x || 0,
      y: coords.y || 0,
    };
  };

  getInfo() {
    return `Robot: ${this.name}, Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }

  goForward(step = 1) {
    this.coords.y += step;
  };

  goBack(step = 1) {
    this.coords.y -= step;
  };

  goRight(step = 1) {
    this.coords.x += step;
  };

  goLeft(step = 1) {
    this.coords.x -= step;
  };
}

class FlyingRobot extends BaseRobot{
  constructor(name, weight, coords, chipVersion) {
    super(name, weight, coords, chipVersion);

    this.coords.z = coords.z || 0;
  };

  goUp(step = 1) {
    this.coords.z += step;
  };

  goDown(step = 1) {
    this.coords.z -= step;
  };
}

class DeliveryDrone extends FlyingRobot{
  constructor(name, weight, coords, chipVersion, maxLoadWeight = null, currentLoad = null) {
    super(name, weight, coords, chipVersion);

    this.maxLoadWeight = maxLoadWeight;
    this.currentLoad = currentLoad;
  }

  hookLoad(cargo) {
    if (this.currentLoad || cargo.weight > this.maxLoadWeight) {
      return;
    }

    this.currentLoad = cargo;
  };

  unhookLoad() {
    this.currentLoad = null;
  };
}

function getPeopleWithCentury(people) {
  return people.map(person => ({
    ...person, century: Math.ceil((person.died / 100)),
  }),
  );
}

const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

getPeopleWithCentury(people) === [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905, century: 20 },
  { name: 'Emma de Milliano', born: 1876, died: 1956, century: 20 },
  { name: 'Maria de Rycke', born: 1683, died: 1724, century: 18 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837, century: 19 },
];

function getPeopleWithChildren(people) {
  return people.map(person => ({
    ...person,
    children: people.filter(child =>
      child.father === person.name || child.mother === person.name),
  }));
}

const people = [
  { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
  { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
  { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
];

const [carolus, emma, laurentina, maria, carel, elisabeth] = getPeopleWithChildren(people);

console.log(
  carolus.name,
  carolus.children.length, 
);

console.log(
  maria.name,
  maria.children.length,
  maria.children[0] === laurentina, 
  maria.children[1] === elisabeth, 
);

function sortByName(people) {
  const newPeople = [...people];

  return newPeople.sort((a, b) => a.name.localeCompare(b.name));
}

const carolus = { name: 'Carolus Haverbeke', born: 1832 };
const emma = { name: 'Emma de Milliano', born: 1876 };
const laurentia = { name: 'Laurentia Haverbeke', born: 1710 };
const maria = { name: 'Maria de Rycke', born: 1683 };
const carel = { name: 'Carel Haverbeke', born: 1796 };
const elisabeth = { name: 'Elisabeth Haverbeke', born: 1711 };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];

sortByName(people) === [
  carel,
  carolus,
  elisabeth,
  emma, 
  laurentia,
  maria
];

function sortByLifeDuration(people) {
  const newPeople = [...people];

  return newPeople.sort((a, b) => (a.died - a.born) - (b.died - b.born));
}

const carolus = { name: 'Carolus Haverbeke', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', born: 1876, died: 1956 };
const laurentia = { name: 'Laurentia Haverbeke', born: 1710, died: 1786 };
const maria = { name: 'Maria de Rycke', born: 1683, died: 1725 };
const carel = { name: 'Carel Haverbeke', born: 1796, died: 1837 };
const elisabeth = { name: 'Elisabeth Haverbeke', born: 1711, died: 1754 };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];

sortByLifeDuration(people) === [
  carel,
  maria,
  elisabeth,
  carolus,
  laurentia,
  emma
];

function createSorterBy(field) {
  // write code here
  return (a, b) => {
    return typeof a[field] === 'string'
      ? a[field].localeCompare(b[field])
			: a[field] - b[field];
  };
}

const carolus =  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];

people.sort(createSorterBy('name'));
people.sort(createSorterBy('born'));

function toArrayOfDigits(n) {
  return String(n).split('').reverse().map(Number);
}