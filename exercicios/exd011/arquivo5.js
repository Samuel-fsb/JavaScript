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