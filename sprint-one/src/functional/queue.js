var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var back = 0; //position of last element in queue;
  var front = 0; //position of first element in queue

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if (back === front) {
      return undefined;
    }
    var result = storage[front];
    delete storage[front];
    front++;
    return result;

  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
