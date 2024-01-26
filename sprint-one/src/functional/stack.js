var Stack = function() {
  var someInstance = {};

  var storage = {};

  // Implement the methods below
  var size = 0;

  someInstance.push = function(value) {
    storage[size] = value;
    //increase for pos
    size++;
  };

  someInstance.pop = function() {
    if (size <= 0) {
      return undefined;
    }

    size--;
    var top = storage[size];

    //delete and return
    delete storage[size];
    return top;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
