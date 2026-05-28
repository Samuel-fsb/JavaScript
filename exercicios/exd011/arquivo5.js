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
