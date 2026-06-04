numbers.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

numbers.find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

numbers.map = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result[result.length] = callback(this[i], i, this);
  }

  return result;
};

numbers.some = function(callback) {
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

numbers.reduce = function(callback, startValue) {
  let prevResult = startValue !== undefined ? startValue : this[0];
  const startIndex = startValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    prevResult = callback(prevResult, this[i], i, this);
  }

  return prevResult;
};

numbers.every = function(callback) {
  
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

function makeTool(part) {
  return function(robot) {
    const robotCopy = { ...robot };

    delete robotCopy[part];

    return robotCopy;
  };
}

function makePackage(connectionsLimit) {
  let connectionsLeft = connectionsLimit;

  return () => {
    if (connectionsLeft <= 0) {
      return 'You reached the connections limit!';
    }
    connectionsLeft--;

    return `${connectionsLeft} connections left`;
  };
}

function makeRandomizer(numbers) {
  const [start, end] = numbers;
  const availableNumbers = [];

  for (let i = start; i <= end; i++) {
    availableNumbers.push(i);
  }

  return () => {
    if (availableNumbers.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const result = availableNumbers[randomIndex];

    availableNumbers.splice(randomIndex, 1);

    return result;
  };
}

function makeWarehouse(goods = []) {
  let totalWeight = goods.reduce((acc, item) => acc + item, 0);
  let count = goods.length;
  let averageWeight = 0;

  return (...args) => {
    totalWeight += args.reduce((acc, item) => acc + item, 0);

    count += args.length;

    averageWeight = count > 0 ? totalWeight / count : 0;

    return {
      totalWeight,
      averageWeight,
    };
  };
}

function makeSpyListener() {
  const data = [];

  const listener = (...robotData) => {
    if (robotData.length === 0) {
      return data;
    }

    data.push(...robotData);
  };

  listener.clear = () => {
    data.length = 0;

    return 'Transferring data... Deleting data... Clear!';
  };

  return listener;
}

function makeSecret(secret, password) {
  let currentSecret = secret;
  let currentPassword = password;
  let wrongPassword = 0;

  const storage = () => 'Absolutely not a secret thing';

  storage.getSecret = (userPassword) => {
    if (wrongPassword === 3) {
      return null;
    }

    if (userPassword === currentPassword) {
      wrongPassword = 0;

      return currentSecret;
    };
    wrongPassword++;

    return 'Wrong password!';
  };

  storage.setSecret = (newSecret, newPassword) => {
    currentSecret = newSecret;
    currentPassword = newPassword;
    wrongPassword = 0;
  };

  return storage;
}

const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },
  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },
  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} updated to ${updateVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.y += step;
  },

  moveBack(step = 1) {
    this.coords.y -= step;
  },

  moveLeft(step = 1) {
    this.coords.x -= step;
  },

  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

Object.setPrototypeOf(kerbin, movementCore);
Object.setPrototypeOf(movementCore, navigationCore);
Object.setPrototypeOf(navigationCore, mainCore);


function getFather(people, person) {
  if (!person.father) {
    return null;
  }

  const father = people.find(p => p.name === person.father);

  return father || null;
}

function Robot(name) {
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
};

Robot.prototype.goForward = function() {
  this.coords.y += 1;
};

Robot.prototype.goBack = function() {
  this.coords.y -= 1;
};

Robot.prototype.goRight = function() {
  this.coords.x += 1;
};

Robot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

const robert = new Robot('robert');

function omitMethod() {
  Object.prototype.omit = function omit(keys) {
    const newKeys = { ...this };

    for (const key of keys) {
      delete newKeys[key];
    };

    return newKeys;
  };
}

function groupByMethod() {
  Array.prototype.groupBy = function(callback) {
    const newGroup = {};

    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const key = callback ? callback(item) : item;

      if (!newGroup[key]) {
        newGroup[key] = [];
      }
      newGroup[key].push(item);

    };

    return newGroup;
  };
} 

class BankAccount {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.history = [`Initial: ${money}`];
  }
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`;
  };

  addMoney(amount, info) {
    this.money += amount; 
    return this.history.push(`${info}: ${amount}`); 
  };

  withdrawMoney(amount, info) {
    this.money -= amount;
    return this.history.push(`${info}: -${amount}`);
  };

  getAccountHistory() {
    return this.history;
  };
}

const dmytro = new BankAccount('Dmytro', 1000);
const pavel = new BankAccount('Pavel', 400);

dmytro.getInfo();

dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();

dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getInfo(); 

dmytro.getAccountHistory();

pavel.getInfo(); 
pavel.getAccountHistory(); 
