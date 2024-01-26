var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.count = 0;

  // Extend the stack object with stackMethods
  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count <= 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  },
  size: function() {
    return this.count;
  }
};